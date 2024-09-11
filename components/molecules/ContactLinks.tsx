import Image from "next/image";
import Link from "next/link";

const ContactLinks = () => (
  <>
    <Link href="https://www.linkedin.com/in/antoineludeau/" target="_blank" aria-label='Lien LinkedIn'>
      <Image src="/linkedin.png" width={30} height={30} alt="Logo LinkedIn" />
    </Link>
    <Link href="https://github.com/antoineludeau" target="_blank" aria-label='Lien Github'>
      <Image src="/github.png" width={30} height={30} alt="Logo Github" />
    </Link>
    <Link href="https://www.malt.fr/profile/antoineludeau" target="_blank" aria-label='Lien Malt'>
      <Image src="/malt.png" width={30} height={30} alt="Logo Malt" />
    </Link>
  </>
);

export default ContactLinks;