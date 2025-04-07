// นำเข้า PrismaClient จาก @prisma/client เพื่อใช้ในการเชื่อมต่อและจัดการกับฐานข้อมูล
import { PrismaClient } from "@prisma/client";
// นำเข้าข้อมูลตัวอย่างจากไฟล์ sample-data.js
import sampleData from "./sample-data";

// สร้างฟังก์ชัน async เพื่อจัดการกับการทำงานแบบ asynchronous
async function main() {
  // สร้างอินสแตนซ์ใหม่ของ PrismaClient
  const prisma = new PrismaClient();

  // ลบข้อมูลสินค้าทั้งหมดที่มีอยู่ในฐานข้อมูลก่อน เพื่อป้องกันข้อมูลซ้ำซ้อน
  await prisma.product.deleteMany();

  // เพิ่มข้อมูลสินค้าใหม่จาก sampleData.products เข้าฐานข้อมูลทั้งหมดในครั้งเดียว
  // โดย data เป็น property ที่จำเป็นต้องใช้ในเมธอด createMany() ของ Prisma
  await prisma.product.createMany({
    data: sampleData.products,
  });

  // แสดงข้อความใน console เมื่อเพิ่มข้อมูลเสร็จสมบูรณ์
  console.log("Sample data seeded successfully");
}

// เรียกใช้ฟังก์ชัน main เพื่อเริ่มการทำงานของสคริปต์
main();
