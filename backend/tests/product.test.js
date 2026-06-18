const request = require("supertest");
const createApp = require("../src/app");

const app = createApp();

describe("GET /api/products", () => {
  it("returns the full product list", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.results)).toBe(true);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});

describe("GET /api/products/search", () => {
  it("finds search results", async () => {
    const res = await request(app).get("/api/products/search?q=bluetooth");
    expect(res.status).toBe(200);
    expect(res.body.count).toBeGreaterThan(0);
  });

  it("returns no results when nothing matches", async () => {
    const res = await request(app).get(
      "/api/products/search?q=zzz-no-such-product",
    );
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(0);
    expect(res.body.results).toEqual([]);
  });

  it("rejects missing query with 400", async () => {
    const res = await request(app).get("/api/products/search");
    expect(res.status).toBe(400);
  });

  it("rejects blank query with 400", async () => {
    const res = await request(app).get("/api/products/search?q=   ");
    expect(res.status).toBe(400);
  });

  it("rejects overly long query with 400", async () => {
    const longQuery = "a".repeat(101);
    const res = await request(app).get(`/api/products/search?q=${longQuery}`);
    expect(res.status).toBe(400);
  });
});

describe("404 errors", () => {
  it("returns 404 for non-existent product", async () => {
    const res = await request(app).get("/api/products/does-not-exist");
    expect(res.status).toBe(404);
  });

  it("returns 404 for unknown routes", async () => {
    const res = await request(app).get("/api/not-a-real-route");
    expect(res.status).toBe(404);
  });
});
