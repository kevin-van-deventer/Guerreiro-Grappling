"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const DATA_PATH = path.join(process.cwd(), "src/data/schedule.json");

export async function getSchedule() {
  try {
    const data = await fs.readFile(DATA_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading schedule:", error);
    return [];
  }
}

export async function updateSchedule(newSchedule: any[], password?: string) {
  // Simple server-side validation
  if (password !== "gg2024") {
    throw new Error("Unauthorized: Invalid admin key.");
  }

  try {
    await fs.writeFile(DATA_PATH, JSON.stringify(newSchedule, null, 2), "utf8");
    revalidatePath("/schedule");
    return { success: true };
  } catch (error) {
    console.error("Error saving schedule:", error);
    throw new Error("Failed to persist schedule changes.");
  }
}
