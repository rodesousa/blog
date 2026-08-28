// Known intrinsic dimensions for every image in the blog (used to set
// width/height attributes and avoid CLS — the browser reserves the aspect
// ratio before the image loads).
// Keyed by the public URL path (without leading slash).
export const IMAGE_DIMS: Record<string, { width: number; height: number }> = {
  "posts/llm-feedback-part-2/featured-image.jpeg": { width: 1920, height: 1080 },
  "posts/llm-feedback-part-2/vibe1.png": { width: 786, height: 705 },
  "posts/llm-feedback-part-2/vibe2.png": { width: 881, height: 710 },
  "posts/llm-feedback-part-1/featured-image.jpg": { width: 2682, height: 1341 },
  "posts/llm-feedback-part-1/copilot.png": { width: 764, height: 843 },
  "posts/llm-feedback-part-1/vibe_coding.png": { width: 320, height: 517 },
  "posts/bad_tools/featured-image.png": { width: 1477, height: 750 },
  "posts/llm-genius/featured-image.png": { width: 808, height: 423 },
  "posts/llm-genius/genius.png": { width: 483, height: 487 },
  "posts/llm-genius/entonnoir.png": { width: 376, height: 213 },
  "posts/llm-genius/reverse-entonnoir.png": { width: 649, height: 439 },
  "posts/recrutement/featured-image.jpg": { width: 664, height: 438 },
  "posts/recrutement/problem.png": { width: 639, height: 627 },
  "posts/recrutement/puzzle.jpg": { width: 6000, height: 4000 },
  "posts/with-elixir/featured-image.jpg": { width: 3353, height: 2514 },
  "posts/jarrete-claude/jarrete.png": { width: 576, height: 549 },
  "posts/jarrete-claude/cognition.png": { width: 701, height: 163 },
  "posts/jarrete-claude/claude-status.png": { width: 986, height: 824 },
  "posts/jarrete-claude/tropfort.png": { width: 768, height: 512 },
  "posts/jarrete-claude/jido.png": { width: 635, height: 537 },
  "posts/jarrete-claude/flame.png": { width: 634, height: 135 },
  "posts/jarrete-claude/nvim.png": { width: 643, height: 114 },
  "images/avatar.png": { width: 182, height: 183 },
};

export function imageDims(path: string): { width: number; height: number } | undefined {
  const key = path.replace(/^\//, "");
  return IMAGE_DIMS[key];
}
