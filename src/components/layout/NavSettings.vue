<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import TablerSettings from '~icons/tabler/settings';
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  action: string;
  danger?: boolean;
}

const user = reactive<User>({
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
});

const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement>();

const menuItems: MenuItem[] = [
  {
    id: 'profile',
    label: 'View Profile',
    icon: 'UserIcon',
    action: 'profile',
  },
  {
    id: 'settings',
    label: 'Account Settings',
    icon: 'SettingsIcon',
    action: 'settings',
  },
  {
    id: 'preferences',
    label: 'Preferences',
    icon: 'AdjustmentsIcon',
    action: 'preferences',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'BellIcon',
    action: 'notifications',
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: 'QuestionIcon',
    action: 'help',
  },
  {
    id: 'logout',
    label: 'Sign Out',
    icon: 'LogoutIcon',
    action: 'logout',
    danger: true,
  },
];

const toggleDropdown = () => {isDropdownOpen.value = !isDropdownOpen.value; };

const closeDropdown = () => {  isDropdownOpen.value = false;};



const handleMenuClick = (item: MenuItem) => {
  console.log(`Clicked: ${item.label} (${item.action})`);

  // Handle different actions
  switch (item.action) {
    case 'profile':
      // Navigate to profile page
      break;
    case 'settings':
      // Navigate to settings page
      break;
    case 'preferences':
      // Open preferences modal/page
      break;
    case 'notifications':
      // Navigate to notifications settings
      break;
    case 'help':
      // Navigate to help page
      break;
    case 'logout':
      // Handle logout
      handleLogout();
      break;
  }

  closeDropdown();
};

const handleLogout = () => {
  console.log('Logging out...');
  // Implement logout logic here
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {  document.removeEventListener('click', handleClickOutside);});




</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-3 p-2 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors duration-200"
      :class="{ 'bg-gray-50': isDropdownOpen }">
      <!-- User Avatar -->
      <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
        <img v-if="user.avatar" :src="user.avatar" :alt="user.name" class="w-full h-full object-cover" />
        <div
          v-else
          class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          {{ getInitials(user.name) }}
        </div>
      </div>

      <!-- User Info -->
      <div class="flex flex-col items-start text-left">
        <span class="font-semibold text-gray-900 text-sm leading-tight">{{ user.name }}</span>
        <span class="text-xs text-gray-500 leading-tight">{{ user.email }}</span>
      </div>

      <!-- Chevron -->

      <div>
         <TablerSettings />
      </div>
      <svg
        class="w-5 h-5 text-gray-400 transition-transform duration-200"
        :class="{ 'rotate-180': isDropdownOpen }"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2">
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
        <button
          v-for="item in menuItems"
          :key="item.id"
          @click="handleMenuClick(item)"
          class="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-50 transition-colors duration-150"
          :class="{ 'text-red-600 hover:bg-red-50': item.danger, 'text-gray-700': !item.danger }">
          <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>












<!--


// Icon components
const UserIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  `,
};

const SettingsIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
    </svg>
  `,
};

const AdjustmentsIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2 0h6m2 0h6"/>
    </svg>
  `,
};

const BellIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  `,
};

const QuestionIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <circle cx="12" cy="17" r="0.5"/>
    </svg>
  `,
};

const LogoutIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16,17 21,12 16,7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  `,
}; -->
