ALTER TABLE "goal_completed" RENAME TO "goal_completion";--> statement-breakpoint
ALTER TABLE "goal_completion" DROP CONSTRAINT "goal_completed_goal_id_goals_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goal_completion" ADD CONSTRAINT "goal_completion_goal_id_goals_id_fk" FOREIGN KEY ("goal_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
