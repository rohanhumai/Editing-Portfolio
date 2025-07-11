"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Starter",
    price: "₹499",
    features: ["Up to 2 Reels", "HD Quality", "Color Grading"],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    price: "₹999",
    features: ["Up to 5 Reels", "4K Quality", "Motion Blur", "Color Grading"],
    buttonText: "Go Pro",
  },
  {
    title: "Elite",
    price: "₹1499",
    features: [
      "Up to 15 Reels",
      "Cinematic Effects",
      "Motion Blur",
      "Color Grading",
      "Personal Consultation",
      "4K Quality"
    ],
    buttonText: "Choose Elite",
  },
];

export default function PricingCards() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-black py-16 px-4 md:px-12 ">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-16 ">
          Choose Your Plan
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between min-h-[600px] p-6 border hover:shadow-xl transition-all"
            >
              <CardHeader>
                <CardTitle className="text-3xl">{plan.title}</CardTitle>
                <p className="text-4xl font-bold text-blue-600 mt-2">{plan.price}</p>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <ul className="space-y-3 text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-black dark:text-gray-300">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <Button className="mt-8 w-full bg-black text-white hover:bg-white hover:text-black transition">
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
