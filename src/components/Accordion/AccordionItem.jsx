import { AccordionHeader } from "./AccordionHeader";
import { AccordionContent } from "./AccordionContent";
import "./AccordionStyles/accordion.css";
import clsx from "clsx";

export const AccordionItem = ({
  panel,
  expanded,
  handleClickToggle,
}) => {
  const {
    id,
    body,
    heading,
    title } = panel;

  const accordionItemClasses = clsx("accordionItem", {
    expanded: expanded,
    collapsed: !expanded,
  });

  return (
    <section
      data-testid="accordion__accordionItemComponent"
      onClick={() => handleClickToggle(id)}
      className={accordionItemClasses}
    >
      <AccordionHeader

        title={title} expanded={expanded} />

      {expanded && (
        <AccordionContent body={body} expanded={expanded} heading={heading} />
      )}
    </section>
  );
};
