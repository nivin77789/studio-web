import Breadcrumb from "@/components/Common/Breadcrumb";
import Courses from "@/components/cources";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      
      <Courses />
    </>
  );
};

export default ContactPage;
