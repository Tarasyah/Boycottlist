"use server";

import * as z from "zod";

const moderationSchema = z.object({
  companyId: z.string(),
  companyName: z.string(),
  reportType: z.enum(["flag", "suggest", "report"]),
  details: z.string(),
  source: z.string().optional(),
});

export async function submitModerationRequest(
  values: z.infer<typeof moderationSchema>
) {
  const validatedFields = moderationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid fields." };
  }

  // In a real application, you would save this to a database for moderation.
  console.log("Moderation Request Received:", validatedFields.data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
