
-- Tighten public insert policy: client can't set approved status
DROP POLICY "Anyone can submit a review" ON public.reviews;
CREATE POLICY "Anyone can submit a review"
ON public.reviews FOR INSERT
TO anon, authenticated
WITH CHECK (
  status = 'pending'
  OR public.has_role(auth.uid(), 'admin')
);

-- Ensure trigger functions have stable search_path (stamp_review_approved_at missed it)
CREATE OR REPLACE FUNCTION public.stamp_review_approved_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.status = 'approved' AND (OLD.status IS DISTINCT FROM 'approved') THEN
    NEW.approved_at := now();
  END IF;
  RETURN NEW;
END;
$$;

-- Lock down SECURITY DEFINER helpers so only the database/triggers can call them
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, app_role) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.enforce_review_insert_defaults() FROM PUBLIC, anon, authenticated;
