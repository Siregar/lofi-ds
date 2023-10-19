export const Diamond = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L16.0909 7.09091L12 11.1818L7.90906 7.09091L12 3Z"
      className="fill-current"
    />
    <path
      d="M12 12.8182L16.0909 16.9091L12 21L7.90906 16.9091L12 12.8182Z"
      className="fill-current"
    />
    <path
      d="M7.09091 7.90906L11.1818 12L7.09091 16.0909L3 12L7.09091 7.90906Z"
      className="fill-current"
    />
    <path
      d="M16.909 7.90906L20.9999 12L16.909 16.0909L12.8181 12L16.909 7.90906Z"
      className="fill-current"
    />
  </svg>
);
