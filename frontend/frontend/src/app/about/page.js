import Header from "../components/header";
import ServicesSection from "../components/category";
import VisionMission from "../components/visionmission";
import slide from "../components/slide";

export default function AboutPage() {
  return (
   <section className="w-full min-h-screen bg-[#fafafa]">
  <Header />

 

  <section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-12">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      
      {/* Left Content */}
      <div>
  <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
    About Us
  </span>

  <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
    Wind Industry
    <span className="block">Procurement</span>
  </h2>

  <p className="mt-6 text-lg leading-8 text-slate-600">
    Sparesto Solutions is a trusted procurement and supply partner with over
    25 years of expertise in the wind Industry. We specialize in sourcing and
    deliver high-quality industrial spares and equivalent materials providing
    reliable, efficient and cost-effective solutions tailored to customer
    needs.
  </p>

  <ul className="mt-10 space-y-5 text-lg text-slate-700">
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
      <div>
        <span className="font-bold">
          Extensive Procurement Experience
        </span>
        <br />
        <span>across OEM's / Renewables</span>
      </div>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
      <div>
        <span className="font-bold">
          Strong Vendor Network
        </span>
        <br />
        <span>(Domestic &amp; International)</span>
      </div>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
      <span className="font-bold">
        Quick Turnaround &amp; Speedy Delivery
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
      <span className="font-bold">
        Quality-Driven &amp; Customer Centric Approach
      </span>
    </li>
  </ul>
</div>

      {/* Right Image */}
      <div>
        <img
          src="/aboutimg.jpg"
          alt="About Company"
          className="h-[500px] w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


<VisionMission/>
<slide/>

</section>
  );
}