import {
  createWebHistory,
  createRouter
} from 'vue-router';
import Hello from './Hello.vue';
import Posts from './Posts.vue';
import NewPost from './NewPost.vue';
import Post from './Post.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        // looks for posts/new
        {
          path: 'new',
          component: NewPost
        },
        // if posts/new not found => search next route
        {
          path: ':id',
          component: Post
        }
      ]
    }
  ]
});

export { router }