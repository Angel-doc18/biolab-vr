// Daily revision reminder as a local notification (works offline, no server).
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

const ID = 'daily-revision';

export async function scheduleDailyReminder(time, minutes, lang = 'en') {
  if (Platform.OS === 'web') return false;
  try {
    const perm = await Notifications.getPermissionsAsync();
    let granted = perm.granted;
    if (!granted && perm.canAskAgain !== false) granted = (await Notifications.requestPermissionsAsync()).granted;
    if (!granted) return false;
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('reminders', {
        name: lang === 'fr' ? 'Rappels de révision' : 'Revision reminders',
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }
    await Notifications.cancelScheduledNotificationAsync(ID).catch(() => {});
    const [hour, minute] = String(time).split(':').map(Number);
    await Notifications.scheduleNotificationAsync({
      identifier: ID,
      content: {
        title: lang === 'fr' ? 'C’est l’heure de réviser' : 'Time to revise Biology',
        body:
          lang === 'fr'
            ? `Votre objectif du jour : ${minutes} minutes. Une courte session garde votre série active.`
            : `Today's goal is ${minutes} minutes. A short session keeps your streak alive.`,
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour, minute, channelId: 'reminders' },
    });
    return true;
  } catch {
    return false;
  }
}

export async function cancelDailyReminder() {
  if (Platform.OS === 'web') return;
  try {
    await Notifications.cancelScheduledNotificationAsync(ID);
  } catch {
    // nothing scheduled
  }
}
