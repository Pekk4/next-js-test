import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const postRouter = createTRPCRouter({

  getById: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.posts.findFirst({
        where: {
          id: input,
        },
    });
  }),

  // makePost: protectedProcedure
  //   .input(
  //     z.object({
  //       name: z.string(),
  //       message: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.posts.create({
  //         data: {
  //           content: input.content,
  //         },
  //       })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  
  getAllPosts: publicProcedure.query(({ ctx }) => {
    const paska = ctx.prisma.perse.findMany({});

    // console.log(paska);

    return paska;
  }),
    








});
