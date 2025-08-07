import { Notification } from "electron";
type NotificationType = {
  title: string;
  subtitle?: string;
  body: string;
};

export const notify = ({ title, subtitle, body }: NotificationType) =>
  new Notification({
    title: title,
    subtitle: subtitle,
    body: body,
    icon: "../assets/untask.svg",
    sound: "",
  });
