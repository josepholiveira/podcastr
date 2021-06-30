export function convertDurationToTimeString(duration: number): string {
  const hours: number = Math.floor(duration / 3600);
  const minutes: number = Math.floor((duration % 3600) / 60);
  const seconds: number = duration % 60;

  const timeString: string = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
  return timeString;
}
