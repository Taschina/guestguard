import { z } from "zod";

export const reportSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/,"YYYY-MM-DD erwartet"),
  reason: z.enum(["diebstahl","sachbeschaedigung","zechprellerei"]),
  paymentStatus: z.enum(["bezahlt","nicht_bezahlt"]),
  remark: z.string().max(2000).optional()
});

export type Report = z.infer<typeof reportSchema>;
