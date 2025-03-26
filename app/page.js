import Image from "next/image";
import Hero from "@/components/hero";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-26">
      <Hero />

      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {statsData.value}
                </div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-400 text-center mb-12">
            Everything you need to manage your finance
          </h2>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                className="p-6 bg-blue-300 hover:bg-blue-400 transition duration-300 ease-in-out"
                key={index}
              >
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold  text-center mb-16">
            How its work
          </h2>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* testimonial */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4  ">
          <h2 className="text-3xl font-bold text-slate-400 text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-blue-300 hover:shadow-xl hover:bg-blue-400 transition duration-300 ease-in-out"
              >
                <CardContent className="pt-4">
                  <div className="flex  items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="border-b p-12 m-3"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-green-400 ring-blue-500 text-black hover:bg-blue-300 shadow-2xl shadow-green-400 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
