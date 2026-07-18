import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge, DonationProgress, EmptyState } from "@/components";

describe("component library", () => {
  it("renders semantic badge content", () => {
    render(<Badge tone="success">Verified</Badge>);
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });

  it("renders donation progress semantics", () => {
    render(<DonationProgress value={50} goal={100} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "50");
  });

  it("renders empty state action copy", () => {
    render(<EmptyState title="No results" description="Try another search." />);
    expect(screen.getByText("No results")).toBeInTheDocument();
  });
});
