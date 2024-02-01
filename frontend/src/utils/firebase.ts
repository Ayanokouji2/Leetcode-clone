import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyATuAS_bTThs_vfg0VqbzLyEtqqI5vpUEc',
    authDomain: 'leetcode-clone-a9071.firebaseapp.com',
    projectId: 'leetcode-clone-a9071',
    storageBucket: 'leetcode-clone-a9071.appspot.com',
    messagingSenderId: '769228878594',
    appId: '1:769228878594:web:e0f16223f23fbc41b6081b',
    measurementId: 'G-LTZL44S5F4'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
