import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Link } from "react-router"

export default function About() {
    const steps = [
        {
            number: 1,
            title: "Businesses Post Projects",
            description: "Need a website, data analysis, or AI solution? Submit a project request.",
            cta: "Services",
        },
        {
            number: 2,
            title: "AI Matches the Best Talent",
            description: "Our AI finds the right students based on skills and experience.",
            cta: "More",
        },
        {
            number: 3,
            title: "Students Build & Deliver",
            description: "A team of students collaborates, completes the work, and gets paid.",
            cta: "More",
        },
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-black text-white">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        About
                        <br />
                        DevConnect
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6">Why Choose CHLTM.tech?</h2>
                    <div className="max-w-2xl">
                        <p className="text-lg mb-8">
                            Are you a business looking for cost-effective, high-quality tech solutions? Or a student eager to gain
                            real-world experience while earning money? DevConnect chltm.tech is your bridge to innovation.
                        </p>
                        <div className="flex gap-4">
                            <Link to="#" className="hover:text-primary">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link to="#" className="hover:text-primary">
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link to="#" className="hover:text-primary">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link to="#" className="hover:text-primary">
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How does it work?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <Card key={step.number} className="bg-black text-white">
                                <CardContent className="p-8">
                                    <div className="text-4xl font-bold mb-6">{step.number}</div>
                                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                    <p className="text-gray-300 mb-8">{step.description}</p>
                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                        {step.cta} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Section */}
            <section className="grid md:grid-cols-2">
                <div className="bg-white p-12 md:p-24">
                    <h2 className="text-4xl font-bold mb-8">Businesses</h2>
                    <p className="text-xl mb-8">Post a Project & Get Matched with Top Talent</p>
                    <h3 className="text-xl font-semibold mb-6">Why Work with Students?</h3>
                    <ul className="space-y-4 text-lg mb-8">
                        <li>- Cost-Effective – Affordable rates compared to professional agencies.</li>
                        <li>- Fresh Perspectives – Innovative, up-to-date tech knowledge.</li>
                        <li>- AI-Powered Matching – Find the perfect student team for your needs.</li>
                    </ul>
                    <Button size="lg" className="gap-2">
                        Services <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
                <div className="bg-[#8B5CF6] p-12 md:p-24 text-white">
                    <h2 className="text-4xl font-bold mb-8">Students</h2>
                    <p className="text-xl mb-8">Gain Experience, Build a Portfolio, & Get Paid</p>
                    <h3 className="text-xl font-semibold mb-6">Why Join?</h3>
                    <ul className="space-y-4 text-lg mb-8">
                        <li>- Real-World Projects – Work on real business tasks, not just theoretical exercises.</li>
                        <li>- Earn Money – Get paid while gaining industry experience.</li>
                        <li>- Boost Your Resume – Impress employers with hands-on project experience.</li>
                    </ul>
                    <Button variant="secondary" size="lg" className="gap-2">
                        More <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </section>
        </main>
    )
}

