import Button from "@/app/components/Button";
import thumb from "@/public/images/post.webp";
import Image from "next/image";

export default function Mission() {
  return (
    <main className="mt-5">
      <h1>Mission page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet
        impedit vitae animi eum ab itaque quasi? Voluptatibus perspiciatis
        pariatur aperiam, aspernatur nihil deserunt distinctio illo temporibus,
        inventore, omnis ab iste tempore incidunt non voluptate!
      </p>

      <Image src={thumb} alt="" />

      <Button />
    </main>
  );
}
