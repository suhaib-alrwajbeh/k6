-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PUBLISHED', 'PENDING');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
