import { createWebHashHistory, createRouter } from "vue-router";

import HomeVue from "../views/HomePage.vue";

import AboutVue from "../views/About/AboutPage.vue";
import AboutUsVue from "../views/About/AboutUsView.vue";
import OurTeamVue from "../views/About/OurTeamView.vue";
import MediaInterviewsVue from "../views/About/MediaInterviewsView.vue";

import AssessmentsVue from "../views/Assessments/AssessmentsPage.vue";
import SyllabusVue from "../views/Assessments/SyllabusView.vue";
import HKBadgeVue from "../views/Assessments/HKBadgeView.vue";

import CourseVue from "../views/Course/CoursePage.vue";
import CourseContentVue from "../views/Course/CourseContentView.vue";
import ClassInfoVue from "../views/Course/ClassInfoView.vue";
import CourseSessionVue from "../views/Course/CourseSessionView.vue";

import GalleryVue from "../views/Gallery/GalleryPage.vue";
import TrainingGalleryVue from "../views/Gallery/TrainingGalleryView.vue";

import ContactsVue from "../views/ContactsPage.vue";

import AdminHomeVue from "../views/Admin/AdminHomeView.vue";
import AdminPanelVue from "../views/Admin/AdminPanelPage.vue";
import VideoGalleryViewVue from "@/views/Gallery/VideoGalleryView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/about",
    name: "About",
    component: AboutVue,
    children: [
      {
        path: "",
        name: "About Us",
        component: AboutUsVue,
      },
      {
        path: "our-team",
        name: "Our Team",
        component: OurTeamVue,
      },
      {
        path: "media-interviews",
        name: "Media Interviews",
        component: MediaInterviewsVue,
      },
    ],
  },
  {
    path: "/assessments",
    name: "Assessments",
    component: AssessmentsVue,
    children: [
      {
        path: "syllabus",
        name: "Assessments Syllabus",
        component: SyllabusVue,
      },
      {
        path: "hk-badge",
        name: "HK Badge",
        component: HKBadgeVue,
      },
    ],
  },
  {
    path: "/course",
    name: "Course",
    component: CourseVue,
    children: [
      {
        path: "content/:type?",
        name: "Content",
        component: CourseContentVue,
      },
      {
        path: "session",
        name: "Session",
        component: CourseSessionVue,
      },
      {
        path: "class",
        component: ClassInfoVue,
      },
    ],
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryVue,
    children: [
      {
        path: "training",
        name: "Training Gallery",
        component: TrainingGalleryVue,
      },
      {
        path: "videos",
        component: VideoGalleryViewVue,
      },
    ],
  },
  { path: "/contact", name: "Contact", component: ContactsVue },
  {
    path: "/admin",
    name: "Admin Panel",
    component: AdminPanelVue,
    children: [{ path: "", component: AdminHomeVue }],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
