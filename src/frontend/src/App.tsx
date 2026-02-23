import { AlertCircle, Code2, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'chetan-hft'
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">CHETAN HFT</h1>
              <p className="text-xs text-muted-foreground">Platform Notice</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-3xl w-full space-y-6">
          <Alert variant="destructive" className="border-2">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">Platform Limitation</AlertTitle>
            <AlertDescription className="text-base mt-2">
              This platform cannot generate MQL5 Expert Advisors or MetaTrader 5 applications.
            </AlertDescription>
          </Alert>

          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">What This Platform Supports</CardTitle>
              <CardDescription className="text-base">
                This development environment is specifically designed for building decentralized applications on the Internet Computer blockchain.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Backend: Motoko</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Smart contracts written in Motoko, a programming language designed for the Internet Computer. Motoko provides secure, efficient canister development with built-in actor model support.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Frontend: React + TypeScript</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modern web applications built with React, TypeScript, and Tailwind CSS. Full integration with Internet Computer canisters for decentralized data storage and computation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h3 className="font-semibold text-lg mb-3">Why MQL5 Cannot Be Generated Here</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>MQL5 is a specialized language for MetaTrader 5 trading platforms, not compatible with Internet Computer architecture</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Expert Advisors require direct integration with MT5 broker APIs and market data feeds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>The Internet Computer blockchain does not support external trading platform integrations or MQL5 code execution</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Recommendation:</strong> To develop MQL5 Expert Advisors, please use MetaEditor (included with MetaTrader 5) or specialized MQL5 development tools and IDEs designed for forex trading automation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border/40 backdrop-blur-sm bg-background/80 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} CHETAN HFT Platform Notice</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
