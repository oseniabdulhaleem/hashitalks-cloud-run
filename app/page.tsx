import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, GitBranch, Settings, Play, Code, CheckCircle } from "lucide-react"

export default function PresentationLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                Live Presentation ****
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Production-Ready Multi-Stage
                <span className="text-primary"> Deployment Systems</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how to build robust CI/CD pipelines with Cloud Deploy, Terraform, and GitHub Actions. From
              infrastructure as code to automated deployments across test, staging, and production environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                Watch Presentation <Play className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                View Code <Code className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Presenter Info */}
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">OA</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Oseni Abdulhaleem</p>
                <p className="text-sm">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">What You'll Learn in 15-30 Minutes</h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                A comprehensive walkthrough of building production-ready deployment pipelines
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Infrastructure Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Setting up Cloud Deploy delivery pipelines and Cloud Run targets using Terraform with remote state
                    management for team collaboration.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <GitBranch className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">CI/CD Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Building GitHub Actions workflows for infrastructure deployment and Cloud Build triggers for
                    automatic application deployments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Approval Gates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Implementing approval gates for production deployments and managing the promotion workflow through
                    environments.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Live Demo Walkthrough</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Watch as I deploy the complete infrastructure and demonstrate the entire workflow
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Infrastructure Deployment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Deploy the complete infrastructure with Terraform, including Cloud Deploy pipelines, Cloud Run
                        targets, and all necessary IAM configurations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Application Deployment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Push application code that automatically builds containers, deploys to test environment, and
                        triggers the promotion workflow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Promotion Workflow</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Demonstrate the promotion workflow from test to staging to production, including approval gates
                        and rollback capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Exploration */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Code Deep Dive</h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Explore the key configurations and understand the dual-pipeline architecture
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Cloud className="h-6 w-6 text-primary" />
                    Terraform Configurations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Cloud Deploy pipeline setup
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Cloud Run target configurations
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Remote state management
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      IAM and security policies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GitBranch className="h-6 w-6 text-primary" />
                    Dual-Pipeline Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Infrastructure team workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Application team workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Separation of concerns
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Automated promotion gates
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Ready to Build Production-Ready Deployments?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join me for this comprehensive walkthrough of modern DevOps practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Join Presentation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Download Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">OA</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Oseni Abdulhalee</p>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Specializing in Cloud Infrastructure, DevOps, and Production-Ready Deployment Systems
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
