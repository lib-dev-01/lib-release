// Routes Configuration
// All pages are lazy-loaded — only downloaded when the user navigates to them.

import React from 'react';

// --- Public pages (lazy) ---
var Home               = React.lazy(function () { return import('../pages/public/Home'); });
var Login              = React.lazy(function () { return import('../pages/public/Login'); });
var Register           = React.lazy(function () { return import('../pages/public/Register'); });
var About              = React.lazy(function () { return import('../pages/public/About'); });
var Institutes         = React.lazy(function () { return import('../pages/public/Institutes'); });
var InstituteDetail    = React.lazy(function () { return import('../pages/public/InstituteDetail'); });
var Library            = React.lazy(function () { return import('../pages/public/Library'); });
var IndustryShowcase   = React.lazy(function () { return import('../pages/public/IndustryShowcase'); });
var ShowcaseDetail     = React.lazy(function () { return import('../pages/public/ShowcaseDetail'); });
var Exhibitions        = React.lazy(function () { return import('../pages/public/Exhibitions'); });
var ExhibitionDetail   = React.lazy(function () { return import('../pages/public/ExhibitionDetail'); });
var Shop               = React.lazy(function () { return import('../pages/public/Shop'); });
var ProductDetail      = React.lazy(function () { return import('../pages/public/ProductDetail'); });
var Membership         = React.lazy(function () { return import('../pages/public/Membership'); });
var Events             = React.lazy(function () { return import('../pages/public/Events'); });
var News               = React.lazy(function () { return import('../pages/public/News'); });
var Forum              = React.lazy(function () { return import('../pages/public/Forum'); });
var Analytics          = React.lazy(function () { return import('../pages/public/Analytics'); });
var Careers            = React.lazy(function () { return import('../pages/public/Careers'); });
var Contact            = React.lazy(function () { return import('../pages/public/Contact'); });
var SearchResults      = React.lazy(function () { return import('../pages/public/SearchResults'); });
var Dashboard          = React.lazy(function () { return import('../pages/public/Dashboard'); });

// --- Customer pages (lazy) ---
var CustomerDashboard  = React.lazy(function () { return import('../pages/customer/CustomerDashboard'); });

// --- Admin pages (lazy) ---
var AdminDashboard     = React.lazy(function () { return import('../pages/admin/AdminDashboard'); });
var AdminChats         = React.lazy(function () { return import('../pages/admin/AdminChats'); });
var CoResearchRequests = React.lazy(function () { return import('../pages/admin/CoResearchRequests'); });
var PurchaseRequests   = React.lazy(function () { return import('../pages/admin/PurchaseRequests'); });
var DetailRequests     = React.lazy(function () { return import('../pages/admin/DetailRequests'); });

// --- Superadmin pages (lazy) ---
var SuperadminDashboard   = React.lazy(function () { return import('../pages/superadmin/SuperadminDashboard'); });
var InstitutesManager     = React.lazy(function () { return import('../pages/superadmin/InstitutesManager'); });
var ExhibitionsManager    = React.lazy(function () { return import('../pages/superadmin/ExhibitionsManager'); });
var LibraryManager        = React.lazy(function () { return import('../pages/superadmin/LibraryManager'); });
var ProductsManager       = React.lazy(function () { return import('../pages/superadmin/ProductsManager'); });
var ShowcasesManager      = React.lazy(function () { return import('../pages/superadmin/ShowcasesManager'); });
var EventsManager         = React.lazy(function () { return import('../pages/superadmin/EventsManager'); });
var NewsManager           = React.lazy(function () { return import('../pages/superadmin/NewsManager'); });
var PlansManager          = React.lazy(function () { return import('../pages/superadmin/MembershipPlansManager'); });
var UsersManager          = React.lazy(function () { return import('../pages/superadmin/UsersManager'); });
var PageAnalytics         = React.lazy(function () { return import('../pages/superadmin/PageAnalytics'); });
var ChatLogs              = React.lazy(function () { return import('../pages/superadmin/ChatLogs'); });
var ModerationQueue       = React.lazy(function () { return import('../pages/superadmin/ModerationQueue'); });
var SeedManager           = React.lazy(function () { return import('../pages/superadmin/SeedManager'); });
var WalletManager         = React.lazy(function () { return import('../pages/superadmin/WalletManager'); });

// --- Panel pages (lazy) ---
var PanelDashboard        = React.lazy(function () { return import('../pages/panel/PanelDashboard'); });
var PublicationQueue      = React.lazy(function () { return import('../pages/panel/PublicationQueue'); });
var InstitutesReviewQueue = React.lazy(function () { return import('../pages/panel/InstitutesReviewQueue'); });
var CommunityManager      = React.lazy(function () { return import('../pages/panel/CommunityManager'); });
var EditLogPage           = React.lazy(function () { return import('../pages/panel/EditLogPage'); });

// --- Institutes manager pages (lazy) ---
var IMInstitutesView       = React.lazy(function () { return import('../pages/institutesManager/IMInstitutesView'); });
var IMProductsView         = React.lazy(function () { return import('../pages/institutesManager/IMProductsView'); });
var IMShowcasesView        = React.lazy(function () { return import('../pages/institutesManager/IMShowcasesView'); });
var IMPurchaseRequestsView = React.lazy(function () { return import('../pages/institutesManager/IMPurchaseRequestsView'); });
var IMDetailRequestsView   = React.lazy(function () { return import('../pages/institutesManager/IMDetailRequestsView'); });

// All roles that access /admin
var ALL_ADMIN_ROLES = [
  'academy_admin',
  'publication_checker', 'publication_manager',
  'institute_admin', 'institutes_manager',
  'pdf_manager', 'video_manager', 'article_manager',
  'info_analysis_manager', 'internet_data_manager', 'olympic_data_manager',
  'community_manager', 'seed_manager'
];

var DIGITAL_ROLES = [
  'academy_admin',
  'pdf_manager', 'video_manager', 'article_manager',
  'info_analysis_manager', 'internet_data_manager', 'olympic_data_manager'
];

// Public Routes
var publicRoutes = [
  { path: '/',              component: Home,            exact: true  },
  { path: '/login',         component: Login,           exact: false },
  { path: '/register',      component: Register,        exact: false },
  { path: '/about',         component: About,           exact: false },
  { path: '/institutes',    component: Institutes,      exact: true  },
  { path: '/institutes/:id',component: InstituteDetail, exact: false },
  { path: '/library',       component: Library,         exact: false },
  { path: '/showcase',      component: IndustryShowcase,exact: true  },
  { path: '/showcase/:id', component: ShowcaseDetail,  exact: false },
  { path: '/exhibitions',          component: Exhibitions,      exact: true  },
  { path: '/exhibitions/:slug',    component: ExhibitionDetail, exact: false },
  { path: '/shop',          component: Shop,            exact: true  },
  { path: '/shop/:id',     component: ProductDetail,   exact: false },
  { path: '/membership',    component: Membership,      exact: false },
  { path: '/events',        component: Events,          exact: false },
  { path: '/news',          component: News,            exact: false },
  { path: '/forum',         component: Forum,           exact: false },
  { path: '/analytics',     component: Analytics,       exact: false },
  { path: '/careers',       component: Careers,         exact: false },
  { path: '/contact',       component: Contact,         exact: false },
  { path: '/search',        component: SearchResults,   exact: false },
  { path: '/dashboard',     component: Dashboard,       exact: false },
];

// Customer Routes
var customerRoutes = [
  {
    path: '/customer',
    component: CustomerDashboard,
    exact: false,
    allowedRoles: ['user', 'member', 'institute_admin', 'academy_admin'],
    layout: 'public'
  }
];

// Role-aware dashboard wrapper — all three components are lazy, so each needs Suspense
function AdminDashboardWrapper(props) {
  var role = props.role;
  if (role === 'academy_admin') return React.createElement(React.Suspense, { fallback: null }, React.createElement(SuperadminDashboard, null));
  if (role === 'institute_admin') return React.createElement(React.Suspense, { fallback: null }, React.createElement(AdminDashboard, null));
  return React.createElement(React.Suspense, { fallback: null }, React.createElement(PanelDashboard, null));
}

// Admin Routes (all roles — superadmin sees everything, others see role-based)
var adminRoutes = [
  // Dashboard — role-aware
  { path: '/admin', component: AdminDashboardWrapper, exact: true, allowedRoles: ALL_ADMIN_ROLES, layout: 'admin', usesRole: true },

  // Institute admin
  { path: '/admin/chats', component: AdminChats, exact: false, allowedRoles: ['institute_admin', 'academy_admin'], layout: 'admin' },
  { path: '/admin/coresearch', component: CoResearchRequests, exact: false, allowedRoles: ['institute_admin', 'academy_admin'], layout: 'admin' },
  { path: '/admin/purchase-requests', component: PurchaseRequests, exact: false, allowedRoles: ['institute_admin', 'academy_admin'], layout: 'admin' },
  { path: '/admin/detail-requests', component: DetailRequests, exact: false, allowedRoles: ['institute_admin', 'academy_admin'], layout: 'admin' },

  // Content management (superadmin)
  { path: '/admin/institutes',  component: InstitutesManager,  exact: false, allowedRoles: ['academy_admin', 'institute_admin'], layout: 'admin' },
  { path: '/admin/exhibitions', component: ExhibitionsManager, exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },
  { path: '/admin/library',     component: LibraryManager,     exact: false, allowedRoles: DIGITAL_ROLES, layout: 'admin' },
  { path: '/admin/products',    component: ProductsManager,    exact: false, allowedRoles: ['academy_admin', 'institute_admin'], layout: 'admin' },
  { path: '/admin/showcases',   component: ShowcasesManager,   exact: false, allowedRoles: ['academy_admin', 'institute_admin'], layout: 'admin' },
  { path: '/admin/events',      component: EventsManager,      exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },
  { path: '/admin/news',        component: NewsManager,        exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },
  { path: '/admin/plans',       component: PlansManager,       exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },

  // Administration (superadmin)
  { path: '/admin/users',       component: UsersManager,       exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },
  { path: '/admin/analytics',   component: PageAnalytics,      exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },
  { path: '/admin/chat-logs',   component: ChatLogs,           exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },
  { path: '/admin/moderation',  component: ModerationQueue,    exact: false, allowedRoles: ['academy_admin', 'publication_checker'], layout: 'admin' },
  { path: '/admin/seed',        component: SeedManager,        exact: false, allowedRoles: ['academy_admin', 'seed_manager'], layout: 'admin' },

  // Publication review
  { path: '/admin/publication-queue', component: PublicationQueue, exact: false, allowedRoles: ['academy_admin', 'publication_checker', 'publication_manager'], layout: 'admin' },

  // Institutes review
  { path: '/admin/institutes-review',   component: InstitutesReviewQueue, exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },
  { path: '/admin/institutes-rejected', component: InstitutesReviewQueue, exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },

  // Institutes manager — content overview with accept/reject
  { path: '/admin/im-institutes', component: IMInstitutesView, exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },
  { path: '/admin/im-products',   component: IMProductsView,   exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },
  { path: '/admin/im-showcases',  component: IMShowcasesView,  exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },
  { path: '/admin/im-purchase-requests', component: IMPurchaseRequestsView, exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },
  { path: '/admin/im-detail-requests',   component: IMDetailRequestsView,   exact: false, allowedRoles: ['academy_admin', 'institutes_manager'], layout: 'admin' },

  // Point Management (superadmin only)
  { path: '/admin/wallets', component: WalletManager, exact: false, allowedRoles: ['academy_admin'], layout: 'admin' },

  // Edit Log
  { path: '/admin/edit-log', component: EditLogPage, exact: false, allowedRoles: ['academy_admin', 'publication_checker', 'institutes_manager', 'institute_admin'], layout: 'admin' },

  // Community
  { path: '/admin/community/threads', component: CommunityManager, exact: false, allowedRoles: ['academy_admin', 'community_manager'], layout: 'admin' },
  { path: '/admin/community',         component: CommunityManager, exact: false, allowedRoles: ['academy_admin', 'community_manager'], layout: 'admin' },
];

function withName(route) {
  var name = route.name || (route.path === '/' ? 'Home' : route.path.replace(/^\//, '').replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
  return { path: route.path, name: name };
}
var allRoutes = [].concat(
  publicRoutes.map(withName),
  customerRoutes.map(withName),
  adminRoutes.map(withName)
);

export { publicRoutes, customerRoutes, adminRoutes };
export default allRoutes;

/**
 * 
 
1. Smaller initial bundle
Before: every page's code downloaded on first visit, even pages the user never opens.
After: only the code for the current page is downloaded. A visitor who only reads the homepage never downloads Forum.jsx, ExhibitionsManager.jsx, WalletManager.jsx, etc.

2. Faster first load
The main index.js chunk gets much smaller → browser parses and executes less JS → page appears faster.

3. Better for Chrome 48
Legacy polyfill bundles are large. Splitting code means each chunk is smaller, which is especially important on slow CPUs/connections that old Chrome 48 machines often have.

4. On-demand loading
Each page chunk is only fetched when the user navigates to it. It's then cached by the browser — subsequent visits to the same page are instant.

5. Scales automatically
Every new page you add stays out of the initial bundle automatically, with no extra effort.

Trade-off: A tiny delay (~50–200ms on first navigation to each page) while the chunk downloads. The Suspense fallback handles this — users see nothing broken, just a brief pause.

 */
