import type { OpenSourceProject } from "@/app/types";

export const openSourceProjects: OpenSourceProject[] = [
  {
    key: "xmlrpc-extended",
    name: "xmlrpc-extended",
    tagline:
      "Production-grade extensions to Python's stdlib SimpleXMLRPCServer — bounded thread pool, overload policies, ASGI adapter, and Linux SO_REUSEPORT scale-out.",
    description: [
      "Extends stdlib SimpleXMLRPCServer with a bounded ThreadPoolExecutor and four configurable overload policies (BLOCK, CLOSE, FAULT, HTTP_503).",
      "ASGI 3 adapter supporting both async-native and sync thread-pool handler dispatch — drop-in for FastAPI / Uvicorn deployments.",
      "Real-time stats snapshots for observability, plus Linux SO_REUSEPORT multi-process scale-out.",
      "Zero runtime dependencies — pure Python stdlib.",
      "Full documentation site: Mermaid architecture diagrams (request lifecycle, threading model, class hierarchy), mkdocstrings API reference, benchmark methodology, contributing guide, changelog, and security policy.",
    ],
    metrics: [
      { label: "Throughput (fast handlers)", value: "1,392 RPS", hint: "vs. 19 RPS baseline" },
      { label: "Improvement", value: "~8×", hint: "under concurrent load" },
      { label: "I/O-bound (50 ms simulated)", value: "149 RPS" },
      { label: "ASGI in-process", value: "2,303 RPS" },
    ],
    techStack: ["Python", "asyncio", "ASGI", "ThreadPoolExecutor", "Linux SO_REUSEPORT"],
    links: {
      pypi: "https://pypi.org/project/xmlrpc-extended/",
      github: "https://github.com/singh-sumit/xmlrpc_extended",
    },
  },
];
