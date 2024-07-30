import { Post } from "@/lib/definitions";

export default function ViewPost({ post }: { post: Post }) {
  return (
    <div className="h-[calc(100vh-7rem)] bg-background px-4 py-6 md:px-6 lg:py-12 flex">
      <article className="prose prose-gray mx-auto max-w-3xl dark:prose-invert border-collapse w-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl py-2 pb-2">
          {post.title}
        </h1>
        <div className="flex-initial items-center space-x-4  text-sm px-2">
          <div className=" flex-none px-2">
            <p>{post.auth}</p>
          </div>
          <div className="flex-initial items-center ps-px ">
            <p>{post.date}</p>
          </div>
        </div>
        <div className="justify-center items-center">
          <p>{post.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            molestias sapiente quasi, ipsum minima ducimus accusamus cum.
            Deleniti numquam, a, quam optio fuga dolore, et suscipit saepe ut
            ipsum labore!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sunt veniam voluptates. Hic vel aliquam, fuga maxime
            quo culpa ullam alias soluta laudantium itaque velit animi, laborum
            at voluptatibus quae sapiente! Ab non quo voluptate porro aperiam,
            rerum animi blanditiis suscipit voluptatem laboriosam incidunt
            placeat adipisci cumque obcaecati, aliquam repellat nisi inventore
            est temporibus repudiandae culpa omnis nihil! Voluptatibus vel saepe
            rerum ea deleniti ipsa veritatis mollitia a, inventore iusto tenetur
            debitis reprehenderit, distinctio odit totam adipisci expedita.
            Perspiciatis nesciunt itaque nam blanditiis laudantium corrupti
            ipsum provident, voluptatum, eligendi voluptatibus laboriosam cum
            odio iure nihil voluptas, officia tempore quam esse dolores
            asperiores quis possimus animi quo. Quaerat, accusamus est iure
            nulla, quasi animi ducimus excepturi odio cupiditate et quisquam,
            omnis rem ipsa in saepe sapiente ullam eum illo consequatur. Enim,
            exercitationem illo. <br /> Recusandae blanditiis accusamus nostrum,
            ad iusto, vitae accusantium dolor quaerat minus saepe eligendi
            numquam itaque beatae nulla sed repellat expedita. In dolore
            dolorem, praesentium nulla fugiat, labore saepe illo dolorum odio
            quidem neque! Dolorem atque inventore vel pariatur voluptates dolore
            omnis recusandae? Esse sapiente odio nostrum cumque hic, ad
            accusamus incidunt! Corrupti quaerat error nisi quisquam voluptatum
            doloribus numquam quo eos dolores aliquam. Non error ut qui
            perspiciatis blanditiis iste maxime totam nam eos placeat autem sit
            suscipit rem corrupti temporibus harum quis sequi consequatur, culpa
            nulla, quam minima velit. A neque, qui delectus aliquid explicabo
            accusamus, necessitatibus dolorem nisi iure natus laborum ullam
            inventore eveniet ea eligendi? Consequuntur itaque quisquam tempora
            minima corporis quod necessitatibus repellat accusamus aliquid
            dolorem ratione non perferendis, voluptas inventore magnam fugit.
          </p>
        </div>
      </article>
    </div>
  );
}
