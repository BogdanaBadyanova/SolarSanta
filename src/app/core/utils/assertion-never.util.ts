class FlowError extends Error {}

export function assertionNeverUtil(assert: never, message: string): never {
  throw new FlowError(message);
}
