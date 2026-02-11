import type { Notification } from '@/types';

export type NotificationType = 'welcome' | 'enrollment' | 'lesson_reminder' | 'streak_warning' | 'achievement' | 'course_published' | 'comment_reply';

export interface NotificationService {
  /** Get notifications for a user */
  getNotifications(userId: string, options?: {
    unreadOnly?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<{ notifications: Notification[]; unreadCount: number }>;

  /** Mark notification as read */
  markAsRead(notificationId: string): Promise<void>;

  /** Mark all notifications as read */
  markAllAsRead(userId: string): Promise<void>;

  /** Send in-app notification */
  sendNotification(userId: string, data: {
    title: string;
    message: string;
    type: Notification['type'];
  }): Promise<Notification>;

  /** Send email notification */
  sendEmailNotification(userId: string, template: NotificationType, data: Record<string, string>): Promise<void>;

  /** Delete a notification */
  deleteNotification(notificationId: string): Promise<void>;
}
