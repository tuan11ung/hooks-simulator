import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

console.log("Đang tạo 100.000 bản ghi... (mất khoảng 8-12 giây)");

const posts = Array.from({ length: 100000 }, (_, index) => ({
  id: index + 1,
  title: faker.lorem.sentence({ min: 5, max: 10 }),
  body: faker.lorem.paragraphs(2),
  userId: Math.floor(Math.random() * 50) + 1   // 50 user giả
}));

const filePath = path.join(import.meta.dirname, '../data/posts.json');
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

console.log("✅ Hoàn thành! File data/posts.json đã tạo (khoảng 18-20MB)");