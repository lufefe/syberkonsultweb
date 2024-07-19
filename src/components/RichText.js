import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ContentfulImage from "../utils/blogUtils";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
    [MARKS.SUPERSCRIPT]: (text) => <sup>{text}</sup>,
    [MARKS.SUBSCRIPT]: (text) => <sub>{text}</sub>,
    [MARKS.STRIKETHROUGH]: (text) => <s>{text}</s>,
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => children,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find((item) =>
          item.marks?.find((mark) => mark.type === "code")
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p className="text-lg">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="h1">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="h2">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="h3">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="h4">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="h5">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="h6">{children}</h6>,
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            height="400"
            width="100%"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      } else if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <a
            href={`/blogdetail/${node.data.target.fields.slug}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="block rounded-lg bg-cover p-6 shadow-lg dark:bg-neutral-700 bg-blend-overlay bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('${node.data.target.fields.coverImage.fields.file.url}')`,
              }}
            >
              <h5 class="h5 mb-2 leading-tight text-white dark:text-neutral-50">
                {node.data.target.fields.title}
              </h5>
              <p class="mb-4 text-base text-white  dark:text-neutral-200">
                {node.data.target.fields.excerpt}
              </p>
              <p class="text-sm text-gray-400 truncate dark:text-gray-400">
                {new Intl.DateTimeFormat("en-GB", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                }).format(new Date(node.data.target.fields.date))}
              </p>
            </div>
          </a>
        );
      }
    },

    [BLOCKS.EMBEDDED_RESOURCE]: (node, children) => <div>{children}</div>,
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc ml-6">{children}</ul>
    ),

    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal ml-6">{children}</ol>
    ),

    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => {
      <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-200 dark:text-white">
          {" "}
          {children}
        </p>
      </blockquote>;
    },
    [BLOCKS.HR]: () => <hr className="my-1" />,

    [BLOCKS.TABLE]: (node, children) => (
      <table className="table-auto border border-white rounded border-collapse">
        <tbody>{children}</tbody>
      </table>
    ),

    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border">{children}</tr>
    ),

    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="border">{children}</th>
    ),

    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="border p-1">{children}</td>
    ),

    [INLINES.ASSET_HYPERLINK]: (node) =>
      defaultInline(INLINES.ASSET_HYPERLINK, node),
    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <a
            href={`/blogdetail/${node.data.target.fields.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [INLINES.RESOURCE_HYPERLINK]: (node) =>
      defaultInlineResource(INLINES.RESOURCE_HYPERLINK, node),

    [INLINES.EMBEDDED_ENTRY]: (node, key) => {
      if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <a
            href={`/blogdetail/${node.data.target.fields.slug}`}
            className="flex flex-row text-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-600  mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="block rounded-lg p-3 shadow-lg dark:bg-neutral-700 bg-blend-overlay bg-cover bg-no-repeat bg-center w-[100vw]"
              style={{
                backgroundImage: `url('${node.data.target.fields.coverImage.fields.file.url}')`,
              }}
            >
              <span class="flex-1 whitespace-nowrap">
                {node.data.target.fields.title}
              </span>
            </div>
          </a>
        );
      }
    },
    [INLINES.EMBEDDED_RESOURCE]: (node, _children) =>
      defaultInlineResource(INLINES.EMBEDDED_RESOURCE, node),
    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {text}
        </a>
      );
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
        />
      );
    },
  },
};

function defaultInline(type, node) {
  return (
    <span key={node.data.target.sys.id}>
      type: {node.nodeType} id: {node.data.target.sys.id}
    </span>
  );
}

function defaultInlineResource(type, node) {
  return (
    <span key={node.data.target.sys.urn}>
      type: {node.nodeType} urn: {node.data.target.sys.urn}
    </span>
  );
}

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
