export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInCDMX(): Date {
  const now = new Date();

  // Convert the UTC time to CDMX's time
  // But we'll handle daylight saving with the formatting function instead of here
  const offsetCDMX = -6; // CDMX is generally in UTC-6
  now.setHours(now.getUTCHours() + offsetCDMX);

  return now;
}

export function formatTimeForCDMX(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/Mexico_City",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Since we're using the specific timezone with Intl.DateTimeFormat, it will handle daylight savings for us.
  // So, we don't need to manually append CST or CDT.

  return formattedTime;
}
