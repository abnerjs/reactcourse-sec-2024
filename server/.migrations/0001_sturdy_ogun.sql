CREATE TABLE IF NOT EXISTS "goal_completed" (
	"id" text PRIMARY KEY NOT NULL,
	"goal_id" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goal_completed" ADD CONSTRAINT "goal_completed_goal_id_goals_id_fk" FOREIGN KEY ("goal_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;