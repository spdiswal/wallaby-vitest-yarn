import { describe, expect, it } from "vitest"
import { add } from "./add"

describe("add", () => {
	it("computes the sum of 1 and 2", () => {
		const sum = add(1, 2)
		expect(sum).toBe(3)
	})
})
