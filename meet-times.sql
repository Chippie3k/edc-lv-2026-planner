-- Meet Times migration for edc_groups
-- Run in Supabase dashboard -> SQL Editor -> New query
-- Safe to re-run (uses IF NOT EXISTS)

ALTER TABLE edc_groups
  ADD COLUMN IF NOT EXISTS meeting_wait  integer,   -- minutes to wait (999 = until they show)
  ADD COLUMN IF NOT EXISTS meeting_after text;       -- next location after the meet

-- Optional: make sure edc_groups is in the realtime publication so meet changes
-- sync to other devices instantly (skip if already there)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'edc_groups'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE edc_groups;
  END IF;
END $$;
