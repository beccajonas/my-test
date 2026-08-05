import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useGetDriveFile } from '@workspace/api-client-react';

const queryClient = new QueryClient();

function Home() {
  const { data, isLoading, isError } = useGetDriveFile();

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background relative overflow-hidden selection:bg-primary/20">
      {/* Delicate background texture pattern to feel like quality paper */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Warm ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ 
          duration: 3, 
          ease: "easeOut",
          scale: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
            ease: "easeInOut"
          }
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 1] }}
          className="group cursor-default flex flex-col items-center"
        >
          <div className="relative inline-block mb-6 md:mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-foreground">
              Hello, World<span className="text-primary italic font-medium transition-colors duration-500 group-hover:text-foreground">.</span>
            </h1>
            
            {/* Elegant hover reveal line */}
            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary/40 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-[120%] rounded-full" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
          >
            <p className="text-muted-foreground font-sans text-lg md:text-xl tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-4">
              <span className="w-12 md:w-16 h-[1px] bg-border transition-all duration-500 group-hover:w-8 md:group-hover:w-12 group-hover:bg-primary/30" />
              <span className="opacity-80 transition-opacity duration-500 group-hover:opacity-100">Beginning</span>
              <span className="w-12 md:w-16 h-[1px] bg-border transition-all duration-500 group-hover:w-8 md:group-hover:w-12 group-hover:bg-primary/30" />
            </p>
          </motion.div>
        </motion.div>

        {/* Google Drive file */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-2"
        >
          <p className="text-muted-foreground/50 font-sans text-xs tracking-[0.25em] uppercase">
            From Google Drive
          </p>
          <div className="h-px w-6 bg-border/40 rounded-full" />
          {isLoading && (
            <p className="text-muted-foreground font-sans text-sm tracking-wide animate-pulse">
              Loading...
            </p>
          )}
          {isError && (
            <p className="text-destructive/60 font-sans text-sm tracking-wide">
              Could not load file
            </p>
          )}
          {data && (
            <p className="text-foreground/70 font-serif text-base md:text-lg tracking-wide">
              {data.name}
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
