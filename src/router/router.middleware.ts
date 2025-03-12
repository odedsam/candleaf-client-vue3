import { useAuthStore } from '@/stores/authStore';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import type { Router } from 'vue-router';

export const authMiddleware = (router: Router) => {
  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const authStore = useAuthStore();
    const isLoggedIn = !!localStorage.getItem('access_token');

    // 🚀 הגנה על נתיבים הדורשים התחברות
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        return next({ name: 'login-view' });
      }

      if (to.meta.roles && authStore.user) {
        const userRole = authStore.user.role ?? ''; // הוספת ברירת מחדל ריקה
        if (!Array.isArray(to.meta.roles) || !to.meta.roles.includes(userRole)) {
          console.warn('403 Forbidden - Insufficient permissions');
          return next({ name: 'home' });
        }
      }
    }

    // 🚀 מניעת גישה ל-login/signup אם כבר מחוברים
    if (isLoggedIn && (to.name === 'login-view' || to.name === 'signup-view')) {
      return next({ name: 'home' });
    }
    console.log("Navigating to:", to.fullPath);
    next();
  });
};