import Image from "next/image";
import Link from "next/link";

const ContactLinks = () => (
  <>
    <Link href="https://www.linkedin.com/in/antoineludeau/" target="_blank">
      <Image src="/linkedin.png" width={30} height={30} alt="Lien LinkedIn" />
    </Link>
    <Link href="https://github.com/antoineludeau" target="_blank">
      <Image src="/github.png" width={30} height={30} alt="Lien Github" />
    </Link>
    <Link href="https://www.malt.fr/profile/antoineludeau" target="_blank">
      <Image src="/malt.png" width={30} height={30} alt="Lien Malt" />
    </Link>
  </>
);

export default ContactLinks;