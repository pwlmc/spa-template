import { Link } from "react-router";
import { useState, type ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/DesignSystem/Button/Button";
import { IconButton } from "@/DesignSystem/IconButton/IconButton";
import { TextField } from "@/DesignSystem/TextField/TextField";
import { TextArea } from "@/DesignSystem/TextArea/TextArea";
import { Checkbox } from "@/DesignSystem/Checkbox/Checkbox";
import { RadioGroup } from "@/DesignSystem/RadioGroup/RadioGroup";
import { Switch } from "@/DesignSystem/Switch/Switch";
import { Select } from "@/DesignSystem/Select/Select";
import { Dialog } from "@/DesignSystem/Dialog/Dialog";
import { Menu } from "@/DesignSystem/Menu/Menu";
import { Popover } from "@/DesignSystem/Popover/Popover";
import { Tooltip } from "@/DesignSystem/Tooltip/Tooltip";
import { Tabs } from "@/DesignSystem/Tabs/Tabs";
import { Spinner } from "@/DesignSystem/Spinner/Spinner";
import { VisuallyHidden } from "@/DesignSystem/VisuallyHidden/VisuallyHidden";
import { Text } from "@/DesignSystem/Text/Text";
import { Section } from "@/DesignSystem/Section/Section";
import { Card } from "@/DesignSystem/Card/Card";
import { tokens } from "@/DesignSystem/Theme/tokens.stylex";

export default function DesignSystemPage() {
  const [action, setAction] = useState(
    "Interact with a component to see its state here.",
  );
  const [favorite, setFavorite] = useState(false);
  const [updates, setUpdates] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const [role, setRole] = useState<string | null>("developer");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [projectName, setProjectName] = useState("Personal workspace");
  const [hints, setHints] = useState(true);

  return (
    <div>
      <title>Design System | SPA Template</title>

      <Section id="top" aria-labelledby="showcase-title" sx={styles.hero}>
        <p {...stylex.props(styles.eyebrow)}>A local component collection</p>
        <Text as="h1" id="showcase-title" variant="heading">
          Design system<span {...stylex.props(styles.titleDot)}>.</span>
        </Text>
        <p {...stylex.props(styles.intro)}>
          Accessible primitives. A shared visual language. Built with Base UI,
          styled with StyleX, and owned by this project.
        </p>
        <nav aria-label="Component categories" {...stylex.props(styles.nav)}>
          <a {...stylex.props(styles.navLink)} href="#buttons">
            Buttons
          </a>
          <a {...stylex.props(styles.navLink)} href="#forms">
            Forms
          </a>
          <a {...stylex.props(styles.navLink)} href="#overlays">
            Overlays
          </a>
          <a {...stylex.props(styles.navLink)} href="#navigation">
            Navigation
          </a>
          <a {...stylex.props(styles.navLink)} href="#feedback">
            Feedback
          </a>
          <Link {...stylex.props(styles.navLink)} to="/example">
            Try the ok-fp example
          </Link>
        </nav>
      </Section>

      <div {...stylex.props(styles.activity)} role="status">
        <span {...stylex.props(styles.statusDot)} aria-hidden="true" />
        <span>{action}</span>
      </div>

      <Section id="buttons" aria-labelledby="buttons-title" sx={styles.section}>
        <SectionHeading
          id="buttons-title"
          number="01"
          title="Buttons"
          description="Clear actions, consistent states, and keyboard-visible focus."
        />
        <div {...stylex.props(styles.panel)}>
          <div {...stylex.props(styles.example)}>
            <p {...stylex.props(styles.caption)}>Variants</p>
            <div {...stylex.props(styles.row)}>
              <Button onClick={() => setAction("Primary action activated.")}>
                Primary
              </Button>
              <Button
                variant="secondary"
                onClick={() => setAction("Secondary action activated.")}
              >
                Secondary
              </Button>
              <Button
                variant="ghost"
                onClick={() => setAction("Ghost action activated.")}
              >
                Ghost
              </Button>
              <Button
                variant="danger"
                onClick={() =>
                  setAction(
                    "Danger action activated. This is a preview; nothing was deleted.",
                  )
                }
              >
                Danger
              </Button>
            </div>
          </div>
          <div {...stylex.props(styles.example)}>
            <p {...stylex.props(styles.caption)}>Sizes & states</p>
            <div {...stylex.props(styles.row)}>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setAction("Small button activated.")}
              >
                Small
              </Button>
              <Button
                variant="secondary"
                onClick={() => setAction("Medium button activated.")}
              >
                Medium
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setAction("Large button activated.")}
              >
                Large
              </Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Tooltip
                content={
                  favorite
                    ? "Remove from your favorites"
                    : "Add to your favorites"
                }
              >
                <IconButton
                  aria-label={
                    favorite ? "Remove from favorites" : "Add to favorites"
                  }
                  aria-pressed={favorite}
                  onClick={() => {
                    setFavorite(!favorite);
                    setAction(
                      favorite ? "Favorite removed." : "Favorite added.",
                    );
                  }}
                >
                  <Star filled={favorite} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <ImportHint>
            import &#123; Button &#125; from "@/DesignSystem/Button/Button";
          </ImportHint>
        </div>
      </Section>

      <Section id="forms" aria-labelledby="forms-title" sx={styles.section}>
        <SectionHeading
          id="forms-title"
          number="02"
          title="Form controls"
          description="Labels, descriptions, validation, and selection without rebuilding the basics."
        />
        <div {...stylex.props(styles.grid)}>
          <div {...stylex.props(styles.panel)}>
            <h3 {...stylex.props(styles.cardTitle)}>Text inputs</h3>
            <form
              {...stylex.props(styles.stack)}
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                setAction(
                  `Profile preview updated for ${data.get("displayName")}.`,
                );
              }}
            >
              <TextField
                label="Display name"
                name="displayName"
                defaultValue="Alex Morgan"
                description="How you appear to your teammates."
                required
              />
              <TextArea
                label="About you"
                name="bio"
                defaultValue="Building thoughtful interfaces, one component at a time."
                description="A little context goes a long way."
                rows={3}
              />
              <Button type="submit">Update preview</Button>
            </form>
            <div {...stylex.props(styles.divider)} />
            <div {...stylex.props(styles.stack)}>
              <TextField
                label="Email address"
                type="email"
                defaultValue="alex@"
                error="Enter a valid email address."
              />
              <TextField
                label="Workspace ID"
                defaultValue="workspace_01"
                disabled
                description="An example of a disabled input."
              />
            </div>
          </div>

          <div {...stylex.props(styles.panel)}>
            <h3 {...stylex.props(styles.cardTitle)}>Selection & preferences</h3>
            <div {...stylex.props(styles.stack)}>
              <Select
                label="Your role"
                description="Choose the work you do most often."
                value={role}
                onValueChange={setRole}
                options={[
                  { value: "developer", label: "Developer" },
                  { value: "designer", label: "Designer" },
                  { value: "product", label: "Product manager" },
                  {
                    value: "admin",
                    label: "Administrator (unavailable)",
                    disabled: true,
                  },
                ]}
              />
              <Checkbox
                label="Email updates"
                description="Occasional news about your workspace."
                checked={updates}
                onCheckedChange={setUpdates}
              />
              <Checkbox label="Partially selected" indeterminate />
              <Checkbox
                label="Managed by your organization"
                disabled
                defaultChecked
              />
              <Switch
                label="Focus mode"
                description="Reduce distractions while you work."
                checked={focusMode}
                onCheckedChange={setFocusMode}
              />
              <RadioGroup
                label="Billing cycle"
                name="billing"
                value={billing}
                onValueChange={setBilling}
                options={[
                  { value: "monthly", label: "Monthly" },
                  { value: "yearly", label: "Yearly" },
                  {
                    value: "custom",
                    label: "Custom (unavailable)",
                    disabled: true,
                  },
                ]}
              />
              <p {...stylex.props(styles.statePreview)}>
                {role ?? "No role"} · {updates ? "Updates on" : "Updates off"} ·{" "}
                {focusMode ? "Focus on" : "Focus off"} · {billing}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="overlays" aria-labelledby="overlays-title" sx={styles.section}>
        <SectionHeading
          id="overlays-title"
          number="03"
          title="Overlays"
          description="Layered content with focus management, keyboard controls, and dismissal built in."
        />
        <div {...stylex.props(styles.grid)}>
          <div {...stylex.props(styles.panel)}>
            <h3 {...stylex.props(styles.cardTitle)}>Dialog</h3>
            <p {...stylex.props(styles.body)}>
              A focused space for a task. Escape closes it and returns focus to
              the trigger.
            </p>
            <Dialog
              trigger={<Button variant="secondary">Edit project</Button>}
              title="Edit project"
              description="Update the name of this demo workspace."
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            >
              <form
                {...stylex.props(styles.stack)}
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
                  const name = String(data.get("projectName")).trim();
                  if (!name) return;
                  setProjectName(name);
                  setDialogOpen(false);
                  setAction(`Project renamed to ${name}.`);
                }}
              >
                <TextField
                  label="Project name"
                  name="projectName"
                  defaultValue={projectName}
                  required
                  pattern={String.raw`.*\S.*`}
                />
                <Button type="submit">Save changes</Button>
              </form>
            </Dialog>
            <p {...stylex.props(styles.statePreview)}>
              Current project: {projectName}
            </p>
          </div>

          <div {...stylex.props(styles.panel)}>
            <h3 {...stylex.props(styles.cardTitle)}>Menu, popover & tooltip</h3>
            <p {...stylex.props(styles.body)}>
              Actions, contextual settings, and short hints. Try the keyboard,
              too.
            </p>
            <div {...stylex.props(styles.row)}>
              <Menu
                trigger={
                  <Button variant="secondary">
                    Actions <span aria-hidden="true">⌄</span>
                  </Button>
                }
                items={[
                  {
                    id: "duplicate",
                    label: "Duplicate",
                    onSelect: () => setAction("Menu selection: Duplicate."),
                  },
                  {
                    id: "archive",
                    label: "Archive",
                    onSelect: () => setAction("Menu selection: Archive."),
                  },
                  {
                    id: "transfer",
                    label: "Transfer (unavailable)",
                    disabled: true,
                    onSelect: () => setAction("Menu selection: Transfer."),
                  },
                  {
                    id: "delete",
                    label: "Delete",
                    destructive: true,
                    onSelect: () =>
                      setAction(
                        "Menu selection: Delete. This preview does not delete data.",
                      ),
                  },
                ]}
              />
              <Popover
                trigger={<Button variant="secondary">Preferences</Button>}
                title="Quick preferences"
                description="Settings in this showcase live only in this tab."
              >
                <Checkbox
                  label="Show keyboard hints"
                  checked={hints}
                  onCheckedChange={setHints}
                />
              </Popover>
              <Tooltip content="Tooltips work on hover and keyboard focus.">
                <Button variant="ghost">Hover or focus me</Button>
              </Tooltip>
            </div>
            {hints && (
              <p {...stylex.props(styles.statePreview)}>
                Tab to focus · Enter to activate · Esc to dismiss
              </p>
            )}
          </div>
        </div>
      </Section>

      <Section id="navigation" aria-labelledby="navigation-title" sx={styles.section}>
        <SectionHeading
          id="navigation-title"
          number="04"
          title="Navigation"
          description="Related views with familiar arrow-key navigation."
        />
        <div {...stylex.props(styles.panel)}>
          <Tabs
            label="Project information"
            items={[
              {
                value: "overview",
                label: "Overview",
                content: (
                  <div>
                    <h3 {...stylex.props(styles.cardTitle)}>
                      A foundation, not a framework
                    </h3>
                    <p {...stylex.props(styles.body)}>
                      Import components from src/DesignSystem. Base UI handles
                      behavior; our components own appearance and the public
                      API.
                    </p>
                  </div>
                ),
              },
              {
                value: "styling",
                label: "Styling",
                content: (
                  <div>
                    <h3 {...stylex.props(styles.cardTitle)}>
                      One set of shared tokens
                    </h3>
                    <p {...stylex.props(styles.body)}>
                      Colors, surfaces, focus rings, and radii live in
                      DesignSystem/Theme/tokens.stylex.ts. Change them once to
                      update the collection.
                    </p>
                  </div>
                ),
              },
              {
                value: "accessibility",
                label: "Accessibility",
                content: (
                  <div>
                    <h3 {...stylex.props(styles.cardTitle)}>
                      Built for more than a mouse
                    </h3>
                    <p {...stylex.props(styles.body)}>
                      Visible focus, labeled controls, and managed overlays are
                      part of the components. Application content still needs
                      meaningful labels and accessible copy.
                    </p>
                  </div>
                ),
              },
              {
                value: "upcoming",
                label: "Unavailable",
                disabled: true,
                content: null,
              },
            ]}
          />
        </div>
      </Section>

      <Section id="feedback" aria-labelledby="feedback-title" sx={styles.section}>
        <SectionHeading
          id="feedback-title"
          number="05"
          title="Feedback & utilities"
          description="Small building blocks for loading and assistive context."
        />
        <div {...stylex.props(styles.grid)}>
          <div {...stylex.props(styles.panel)}>
            <h3 {...stylex.props(styles.cardTitle)}>Spinner</h3>
            <div {...stylex.props(styles.row)}>
              <Spinner label="Loading example" />
              <Spinner size="sm" label="Loading compact example" />
              <span {...stylex.props(styles.body)}>
                Two sizes. Respects reduced motion.
              </span>
            </div>
          </div>
          <div {...stylex.props(styles.panel)}>
            <h3 {...stylex.props(styles.cardTitle)}>VisuallyHidden</h3>
            <p {...stylex.props(styles.body)}>
              This sentence includes extra screen-reader context.
              <VisuallyHidden>
                {" "}
                This additional text is available to assistive technology
                without being visible.
              </VisuallyHidden>
            </p>
            <ImportHint>
              &lt;VisuallyHidden&gt;Extra context&lt;/VisuallyHidden&gt;
            </ImportHint>
          </div>
        </div>
      </Section>

      <Section id="typography" aria-labelledby="typography-title" sx={styles.section}>
        <SectionHeading
          id="typography-title"
          number="06"
          title="Typography & cards"
          description="Shared type styles and noninteractive surfaces. Semantics stay independent of appearance."
        />
        <div {...stylex.props(styles.grid)}>
          <Card as="section" aria-labelledby="text-example-title">
            <div {...stylex.props(styles.stack)}>
              <Text as="h3" variant="title" id="text-example-title">
                Text variants
              </Text>
              <Text variant="heading" as="span">
                Heading appearance
              </Text>
              <Text>Body text for everyday content.</Text>
              <Text variant="small" tone="muted">
                Small, muted supporting information.
              </Text>
              <Text variant="caption">Caption or eyebrow</Text>
              <Text tone="danger">Something needs your attention.</Text>
            </div>
          </Card>
          <Card
            as="article"
            variant="raised"
            padding="lg"
            aria-labelledby="card-example-title"
          >
            <div {...stylex.props(styles.stack)}>
              <Text variant="caption" tone="muted">
                Raised card
              </Text>
              <Text as="h3" variant="title" id="card-example-title">
                Workspace settings
              </Text>
              <Text tone="muted">
                A shared surface, border, radius, and padding. Compose ordinary
                children without extra layout components.
              </Text>
              <Button onClick={() => setAction("Card action activated.")}>
                Try card action
              </Button>
              <Text variant="small" tone="muted">
                Card padding: none, sm, md, or lg.
              </Text>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

function SectionHeading({
  id,
  number,
  title,
  description,
}: {
  id: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div {...stylex.props(styles.sectionHeading)}>
      <span {...stylex.props(styles.sectionNumber)} aria-hidden="true">
        {number}
      </span>
      <div>
        <h2 id={id} {...stylex.props(styles.sectionTitle)}>
          {title}
        </h2>
        <p {...stylex.props(styles.sectionDescription)}>{description}</p>
      </div>
    </div>
  );
}

function ImportHint({ children }: { children: ReactNode }) {
  return <code {...stylex.props(styles.importHint)}>{children}</code>;
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.3l-5.6 3 1.1-6.3L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

const styles = stylex.create({
  hero: {
    paddingTop: { default: 72, "@media (max-width: 600px)": 40 },
    paddingBottom: 32,
  },
  eyebrow: {
    margin: 0,
    color: tokens.accent,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  titleDot: { color: tokens.accent },
  intro: { margin: 0, maxWidth: 580, color: tokens.muted, fontSize: 16 },
  nav: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 },
  navLink: {
    display: "inline-flex",
    paddingBlock: 7,
    paddingInline: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: 999,
    fontSize: 12,
    color: tokens.muted,
    backgroundColor: { default: "transparent", ":hover": tokens.raised },
    textDecoration: "none",
    outlineColor: tokens.focus,
  },
  activity: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    paddingBlock: 12,
    paddingInline: 16,
    minHeight: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: tokens.radius,
    color: tokens.muted,
    fontSize: 13,
    backgroundColor: tokens.surface,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: tokens.accent,
    flexShrink: 0,
  },
  section: { marginTop: 48, scrollMarginTop: 24 },
  sectionHeading: {
    display: "flex",
    alignItems: "baseline",
    gap: 14,
    marginBottom: 20,
  },
  sectionNumber: {
    fontSize: 12,
    fontFamily: "monospace",
    color: tokens.accent,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "-0.035em",
    lineHeight: 1.4,
  },
  sectionDescription: {
    marginTop: 5,
    marginBottom: 0,
    fontSize: 13,
    color: tokens.muted,
  },
  panel: {
    minWidth: 0,
    padding: { default: 28, "@media (max-width: 600px)": 20 },
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tokens.border,
    borderRadius: 16,
    backgroundColor: tokens.surface,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 760px)": "minmax(0, 1fr)",
    },
    gap: 20,
  },
  row: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 },
  stack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 24,
  },
  example: { marginBottom: 28 },
  caption: {
    marginTop: 0,
    marginBottom: 14,
    color: tokens.muted,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 16,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  body: {
    marginTop: 0,
    marginBottom: 16,
    color: tokens.muted,
    fontSize: 14,
    lineHeight: 1.7,
  },
  divider: { height: 1, backgroundColor: tokens.border, marginBlock: 28 },
  statePreview: {
    paddingTop: 16,
    marginTop: 20,
    marginBottom: 0,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: tokens.border,
    fontSize: 12,
    color: tokens.muted,
    overflowWrap: "anywhere",
  },
  importHint: {
    display: "block",
    marginTop: 16,
    paddingBlock: 12,
    paddingInline: 14,
    borderRadius: 8,
    backgroundColor: tokens.canvas,
    color: tokens.muted,
    fontSize: 11,
    overflowWrap: "anywhere",
    whiteSpace: "pre-wrap",
  },
});
