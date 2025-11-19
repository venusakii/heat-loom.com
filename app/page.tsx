import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, Shield, Zap, Heart, Timer, Thermometer, Star, CheckCircle2, ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Flame className="w-7 h-7 text-primary" />
              <span className="font-serif text-xl tracking-tight text-foreground">HEAT LOOM</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <Link href="#products" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">PRODUCTS</Link>
              <Link href="#technology" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">TECHNOLOGY</Link>
              <Link href="#reviews" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">REVIEWS</Link>
              <Link href="#faq" className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors">SUPPORT</Link>
            </div>
            <Button size="sm" className="hidden md:flex text-sm tracking-wide">SHOP</Button>
            <Button size="sm" variant="ghost" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-balance leading-[0.95] tracking-tight">
                  Warmth<br />reimagined
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-lg">
                  Experience intelligent comfort with our collection of premium heated blankets. 
                  Where modern technology meets timeless luxury.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-sm tracking-wider h-14 px-8">
                  EXPLORE COLLECTION
                </Button>
                <Button size="lg" variant="outline" className="text-sm tracking-wider h-14 px-8">
                  LEARN MORE
                </Button>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/50">4.9 from 2,450+ reviews</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src="/cozy-person-wrapped-in-luxurious-heated-blanket-on.jpg"
                  alt="Premium heated blanket"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features Grid */}
      <section id="features" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance tracking-tight">
              Designed for everyday comfort
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Every detail considered, every feature refined
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Zap,
                title: 'Rapid heating',
                description: 'Reaches optimal temperature within minutes using advanced heating elements'
              },
              {
                icon: Shield,
                title: 'Safety first',
                description: 'Auto-shutoff protection and overheat prevention for peace of mind'
              },
              {
                icon: Thermometer,
                title: 'Precise control',
                description: 'Ten temperature settings from 85°F to 115°F for personalized comfort'
              },
              {
                icon: Timer,
                title: 'Smart scheduling',
                description: 'Program your ideal heating schedule for effortless comfort'
              },
              {
                icon: Heart,
                title: 'Therapeutic warmth',
                description: 'Medical-grade heat therapy for muscle tension and joint relief'
              },
              {
                icon: Flame,
                title: 'Energy efficient',
                description: 'Uses minimal electricity while maintaining consistent warmth'
              }
            ].map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl tracking-tight">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Product Showcase */}
      <section id="products" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance tracking-tight">
              Our collection
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Three thoughtfully crafted options to suit your lifestyle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Luxe Fleece',
                price: '$129',
                image: '/luxury-fleece-heated-blanket-cream-color-folded.jpg',
                features: ['Ultra-soft fleece', 'Machine washable', '5-year warranty']
              },
              {
                name: 'Classic Comfort',
                price: '$99',
                image: '/classic-heated-blanket-grey-color-on-sofa.jpg',
                features: ['Premium microfiber', 'Dual controls', '3-year warranty'],
                popular: true
              },
              {
                name: 'Travel Essential',
                price: '$79',
                image: '/portable-heated-throw-blanket-navy-blue-compact.jpg',
                features: ['Compact design', 'USB powered', 'Travel bag included']
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-border/50 group">
                {product.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2.5 text-xs tracking-widest font-medium">
                    BESTSELLER
                  </div>
                )}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl mb-2 tracking-tight">{product.name}</h3>
                    
                  </div>
                  <ul className="space-y-2.5">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground/60">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-12 text-sm tracking-wider" variant={product.popular ? 'default' : 'outline'}>
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technology */}
      <section id="technology" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img
                  src="/advanced-heating-technology-diagram-smart-blanket-.jpg"
                  alt="Smart heating technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl font-light text-balance tracking-tight">
                  Intelligent heating technology
                </h2>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  Our proprietary ThermoSmart™ system continuously monitors and adjusts temperature, 
                  delivering consistent warmth without hot spots or cold zones.
                </p>
              </div>
              <ul className="space-y-5">
                {[
                  'Even heat distribution across entire surface',
                  'Smart sensors adapt to ambient temperature',
                  'Automatic adjustment for optimal comfort',
                  'Low EMF emission for safe extended use'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl font-light text-balance tracking-tight">
                  More than warmth
                </h2>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  Experience the therapeutic benefits of consistent, gentle heat for improved sleep, 
                  muscle relaxation, and overall wellbeing.
                </p>
              </div>
              <div className="space-y-8 pt-4">
                {[
                  {
                    title: 'Enhanced sleep quality',
                    description: 'Maintain ideal body temperature throughout the night for deeper rest'
                  },
                  {
                    title: 'Muscle relaxation',
                    description: 'Soothe tired muscles and reduce tension naturally'
                  },
                  {
                    title: 'Pain relief',
                    description: 'Therapeutic warmth helps alleviate chronic pain and stiffness'
                  },
                  {
                    title: 'Stress reduction',
                    description: 'Create a calming environment that promotes relaxation'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-serif text-xl tracking-tight">{benefit.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="/person-sleeping-peacefully-with-heated-blanket.jpg"
                    alt="Peaceful sleep"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="/elderly-person-comfortable-with-heated-blanket-smi.jpg"
                    alt="Comfort"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="/relaxed-person-reading-book-with-cozy-heated-blank.jpg"
                    alt="Relaxation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="/couple-cozy-together-with-heated-blanket-watching-.jpg"
                    alt="Together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section id="reviews" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance tracking-tight">
              Customer reviews
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Anderson',
                text: 'This heated blanket has transformed my sleep quality. The temperature control is perfect and I love the auto-shutoff feature.'
              },
              {
                name: 'Jennifer Thompson',
                text: 'As someone with chronic back pain, this has been life-changing. The gentle heat helps me relax before bed.'
              },
              {
                name: 'Robert Williams',
                text: 'Outstanding quality. It heats up quickly and the material is incredibly soft. Worth every penny.'
              }
            ].map((review, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed">{review.text}</p>
                <p className="text-sm text-foreground/50">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Comparison Table */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance tracking-tight">
              Find your match
            </h2>
            <p className="text-lg text-foreground/60">
              Compare features across our collection
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-serif text-base font-normal tracking-tight">Feature</th>
                  <th className="text-center p-6 font-serif text-base font-normal tracking-tight">Luxe Fleece</th>
                  <th className="text-center p-6 font-serif text-base font-normal tracking-tight bg-primary/5">Classic Comfort</th>
                  <th className="text-center p-6 font-serif text-base font-normal tracking-tight">Travel Essential</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Heat Settings', luxe: '10', classic: '10', travel: '3' },
                  { feature: 'Material', luxe: 'Premium Fleece', classic: 'Microfiber', travel: 'Fleece Blend' },
                  { feature: 'Size Options', luxe: 'Queen/King', classic: 'All Sizes', travel: 'Throw' },
                  { feature: 'Dual Controls', luxe: true, classic: true, travel: false },
                  { feature: 'Machine Washable', luxe: true, classic: true, travel: true },
                  { feature: 'Auto Shutoff', luxe: true, classic: true, travel: true },
                  { feature: 'Warranty', luxe: '5 Years', classic: '3 Years', travel: '2 Years' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="p-6 text-sm text-foreground/70">{row.feature}</td>
                    <td className="text-center p-6 text-sm">
                      {typeof row.luxe === 'boolean' ? (
                        row.luxe ? <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto" /> : '—'
                      ) : (
                        <span className="text-foreground/70">{row.luxe}</span>
                      )}
                    </td>
                    <td className="text-center p-6 text-sm bg-primary/5">
                      {typeof row.classic === 'boolean' ? (
                        row.classic ? <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto" /> : '—'
                      ) : (
                        <span className="text-foreground/70">{row.classic}</span>
                      )}
                    </td>
                    <td className="text-center p-6 text-sm">
                      {typeof row.travel === 'boolean' ? (
                        row.travel ? <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto" /> : '—'
                      ) : (
                        <span className="text-foreground/70">{row.travel}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section id="faq" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance tracking-tight">
              Questions & answers
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                question: 'Are heated blankets safe to use all night?',
                answer: 'Yes. Our blankets feature multiple safety systems including auto-shutoff after 10 hours and overheat protection. All products are UL certified.'
              },
              {
                question: 'Can I wash my heated blanket?',
                answer: 'All our blankets are machine washable. Disconnect the controller, wash on gentle cycle with cold water, and tumble dry on low heat.'
              },
              {
                question: 'How long does it take to heat up?',
                answer: 'Our blankets reach optimal temperature in approximately 5 minutes using rapid heating technology.'
              },
              {
                question: 'What is your return policy?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, return your blanket for a full refund.'
              },
              {
                question: 'Do you ship internationally?',
                answer: 'We currently ship to the US, Canada, UK, and Australia. International orders typically arrive within 7-14 business days.'
              },
              {
                question: 'How energy efficient are heated blankets?',
                answer: 'Our blankets use only 75-150 watts on average—less than a standard light bulb and just pennies per night to operate.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-border/50 pb-8 last:border-0">
                <h3 className="font-serif text-xl mb-4 tracking-tight">{faq.question}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA Footer */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-balance tracking-tight">
            Experience ultimate comfort
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Join our community and receive 15% off your first order. 
            Plus, exclusive access to new collections and seasonal offers.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-6 py-4 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="lg" className="h-auto py-4 px-8 text-sm tracking-wider">
                SUBSCRIBE
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Flame className="w-6 h-6 text-primary" />
                <span className="font-serif text-lg tracking-tight">HEAT LOOM</span>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Premium heated blankets for everyday comfort
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-tight mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-foreground/50">
                <li><Link href="#" className="hover:text-foreground transition-colors">All Products</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Best Sellers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-tight mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-foreground/50">
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">FAQs</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Shipping</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-tight mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-foreground/50">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Press</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/40">
              © 2025 Heat Loom. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-foreground/40">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
