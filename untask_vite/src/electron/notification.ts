import { Notification } from "electron";
type NotificationType = {
  title: string;
  subtitle?: string;
  body: string;
};

interface NotificationParam {
  notficationParam: NotificationType;
}

export const notify = ({ notficationParam }: NotificationParam) =>
  new Notification({
    title: notficationParam.title,
    subtitle: notficationParam.subtitle,
    body: notficationParam.body,
    icon: "",
    sound: "",
  });
