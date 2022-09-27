import * as React from "react";

function Logo(props: any) {
  return (
    <svg viewBox="0 0 2686 655" width="1em" height="1em" {...props}>
      <path
        fill="#262626"
        d="M1 401.333c.999-3.241 2.489-6.08 2.914-9.07 2.15-15.118 7.106-29.045 15.828-41.71 6.536-9.49 14.898-16.804 24.688-22.574 17.206-10.14 36.092-15.478 55.583-18.975 6.538-1.172 13.09-2.26 19.465-3.358 4.726-18.327 9.469-36.572 14.131-54.838 6.5-25.462 12.634-51.022 19.499-76.385 5.802-21.438 11.813-42.861 21.943-62.824 10.205-20.109 25.658-32.53 48.601-35.805 16.83-2.402 33.108-1.69 48.934 4.272 7.323 2.759 14.23 6.679 21.188 10.335 4.3 2.26 4.567 6.801 5.223 10.98 2.667 17.011 5.503 34 7.928 51.046 1.952 13.723 3.301 27.531 5.105 41.277 1.864 14.202 4.074 28.358 5.906 42.563 1.526 11.82 2.603 23.7 4.105 35.524 1.184 9.325 2.71 18.606 4.145 28.314l67.061 1.504c3.15 17.223-5.212 33.375-24.59 36.223-8.934 1.314-18.132.86-27.212 1.153-2.972.096-5.95.015-9.617.015.763 7.269 1.344 14.203 2.252 21.095 1.169 8.864 2.6 17.693 3.92 26.537 2.014 13.507 3.39 27.15 6.224 40.483 2.838 13.352 6.739 26.522 10.937 39.525 2.434 7.536 6.036 15.115 14.164 18.249 9.037 3.484 16.933-.582 23.893-5.823 5.515-4.153 10.356-9.238 15.233-14.17 1.09-1.102 1.53-3.303 1.495-4.981-.174-8.426-.76-16.843-.916-25.269-.42-22.754-.927-45.51-.957-68.266-.025-18.422.594-36.845.927-55.267.333-18.422.794-36.844.912-55.268.03-4.689-1.178-9.375-1.481-14.083-.077-1.203.933-3.417 1.778-3.597 15.322-3.266 29.15.395 40.857 10.54 13.908 12.053 21.005 27.964 22.813 46.017 1.297 12.943 1.507 25.998 2.091 39.008.19 4.23.03 8.474.03 12.798 5.206-12.627 10.381-25.036 15.392-37.51.64-1.596.72-3.562.562-5.312-1.307-14.427.21-28.54 5.114-42.152 3.336-9.26 7.53-17.972 15.307-24.763 7.537-6.583 16.096-6.21 23.991-3.361 15.75 5.684 27.686 15.894 32.794 32.819 2.022 6.698 2.513 13.42-.607 19.297-5.36 10.099-11.47 19.875-18.122 29.174-2.683 3.75-3.204 6.162-1.153 10.14 5.992 11.617 14.004 21.031 25.973 26.88 9.75 4.766 19.453 5.472 29.455.65.75-10.517 1.346-21.357 2.34-32.16 1.124-12.205 2.635-24.375 3.913-36.566a246.78 246.78 0 001.017-12.766c.408-7.752.64-15.513 1.038-23.265.396-7.72.906-15.436 1.378-23.367 16.315-1.848 30.396 3.131 42.464 14.108 12.725 11.574 20.118 26.035 21.001 43.146.756 14.636.24 29.343.112 44.016-.042 4.759-.588 9.516-.977 14.267-1.311 16.023-2.711 32.04-3.96 48.067-.5 6.41-.85 12.84-1.003 19.266-.418 17.587-1.199 35.19-.782 52.76.167 7.064 2.393 14.325 4.932 21.022 2.95 7.781 12.424 11.473 19.75 7.32 6.857-3.888 12.994-9.298 18.66-14.842 1.361-1.331-.298-5.862-.731-8.898-1.852-12.986-2.171-25.856 5.23-37.41 3.74-5.836 8.961-10.35 15.979-12.184l3.937 4.926c7.957-21.728 16.47-42.317 23.008-63.516 7.873-25.53 14.322-51.517 20.751-77.463 1.138-4.594-.892-9.953-1.356-14.969-1.419-15.333-1.146-30.355 11.202-41.87 7.888-7.355 17.771-11.227 28.245-12.911 18.235-2.933 36.135-.597 53.663 4.926 1.676.528 3.36 1.202 4.85 2.116 8.778 5.382 8.712 11.153.249 17.004-5.392 3.728-11.99 5.79-15.525 12.164-7.02 12.66-8.118 24.813-.59 38.011 9.68 16.972 18.073 34.673 27.247 51.94 9.996 18.813 19.704 37.777 25.362 58.404 2.687 9.793 4.398 19.91 5.808 29.986 3.811 27.245-4.523 51.935-16.727 75.713-.133.26-.064.622-.178 2.054 8.95-5.796 17.399-11.127 25.685-16.7 3.507-2.358 6.55-5.4 10.033-7.798 2.312-1.592 2.212-2.874 1.567-5.541-3.472-14.352-4.528-28.723 2.733-42.412 3.327-6.272 8.4-10.924 15.062-13.298 1.435-.512 3.795 1.57 5.904 2.539 4.548-11.49 9.415-23.527 14.085-35.64 11.027-28.6 19.01-58.128 26.53-87.789 1.508-5.947 3.266-11.927 3.8-17.99.366-4.148-1.36-8.445-1.856-12.71-1.804-15.543-1.247-30.633 11.234-42.253 7.769-7.234 17.54-11.041 27.826-12.704 18.22-2.945 36.142-.743 53.661 4.89 1.516.487 3.054 1.1 4.374 1.97 7.846 5.174 11.322 11.135.773 17.357-5.63 3.321-12.022 5.808-15.489 12.173-6.81 12.501-7.96 24.571-.566 37.608 9.64 16.998 18.034 34.697 27.235 51.95 10.027 18.802 19.762 37.747 25.374 58.4 2.662 9.798 4.493 19.878 5.937 29.94 3.912 27.252-4.537 51.936-16.557 75.78-.192.38-.178.865-.507 2.617 10.567-7.099 20.85-12.913 29.81-20.326 9.273-7.673 17.305-16.855 25.788-25.468 2.866-2.91 3.177-6.018 2.088-10.338-2.489-9.873-4.174-20.002-5.42-30.121-1.205-9.777-2.286-19.701-1.948-29.51.77-22.317 3.622-44.387 10.167-65.896 5.295-17.4 12.398-33.887 22.647-48.949 11.096-16.306 25.172-29.207 44.074-35.577 11.74-3.956 23.875-5.342 36.59-3.877 16.73 1.926 31.902 7.07 45.083 17.34 7.279 5.67 13.712 12.426 20.57 18.734.49-3.568 1.472-7.948 1.63-12.358.473-13.28 6.048-17.316 19.098-14.027 17.543 4.423 30.822 14.655 40.391 29.633 5.753 9.004 5.14 19.385 4.256 29.563-.423 4.878-1.22 9.724-1.65 14.601a3483.224 3483.224 0 00-3.015 36.29c-1.377 17.686-3.079 35.358-3.9 53.07-.837 18.065-1.361 36.189-.855 54.254.24 8.583 2.672 17.24 5.073 25.585 2.193 7.62 12.967 11.175 20.661 7.569 11.478-5.38 18.645-15.174 26.131-24.866 5.965-7.722 6.529-14.932 3.67-24.272-3.295-10.763-4.482-22.273-5.64-33.556-1.045-10.182-1.617-20.547-.951-30.736.87-13.309 2.364-26.689 5.043-39.74 3.67-17.876 9.888-35.087 18.855-51.056 14.135-25.174 33.36-44.971 61.627-53.865 8.57-2.697 17.798-4.665 26.712-4.618 16.406.086 31.566 5.73 44.29 16.193 7.354 6.046 13.546 13.506 20.22 20.287.6-4.106 1.584-9.071 1.974-14.083.321-4.13 3.105-4.953 6.192-5.677 10.958-2.573 21.379.358 31.342 4.157 10.125 3.86 20.035 8.53 26.458 18.173 3.97 5.96 4.154 12.021 3.33 19.01-1.254 10.645-.942 21.479-1.234 32.234-.368 13.589-.548 27.183-1.044 40.767-.506 13.85-1.356 27.69-1.95 41.538-.728 17.01-1.3 34.025-2.033 51.034-.377 8.752-.956 17.495-1.52 27.628 5.248-3.661 9.676-6.382 13.687-9.619 10.43-8.416 20.78-16.94 30.897-25.726 1.673-1.452 2.84-4.453 2.828-6.73-.136-26.924-.72-53.845-.804-80.768-.048-15.588.625-31.177.924-46.767.363-18.922.769-37.844.931-56.768.035-4.048-1.074-8.096-1.276-12.164-.064-1.298.891-3.666 1.733-3.841 18.976-3.941 35.496 2.561 48.14 18.127 11.277 13.883 16.057 30.545 16.425 48.339.274 13.247.054 26.504.054 39.757l1.859.367c1.377-3.369 2.759-6.735 4.13-10.106 3.273-8.043 6.611-16.06 9.76-24.152.746-1.918 1.282-4.107 1.18-6.134-.556-10.921-.528-21.778 2.069-32.49 2.8-11.56 7.273-22.353 14.514-31.886 5.568-7.33 18.33-10.63 28.228-6.609 15.535 6.312 27.686 16.166 32.451 33.194 1.601 5.72 2.016 11.188-.044 16.989-4.246 11.954-11.329 22.14-19.19 31.826-2.355 2.9-2.846 4.843-1.125 8.44 6.214 12.985 15.138 23.1 28.486 28.828 6.628 2.844 13.525 4.409 20.829 2.344 3.582-1.012 3.357-4.228 3.731-6.582 3.497-22.003 9.845-43.134 20.312-62.774 10.66-20.002 24.37-37.499 45.81-47.082 13.874-6.202 28.3-8.689 43.699-6.771 11.581 1.442 22.634 4.014 32.84 9.482 10.828 5.802 20.893 12.745 28.222 22.955.962 1.341 2.09 2.563 3.14 3.84l1.427-.31c.557-4.323 1.12-8.645 1.67-12.97.326-2.568.441-5.182.99-7.701.89-4.088 3.88-5.755 7.811-6.09 11.813-1.01 22.057 3.464 31.38 9.887 7.063 4.867 13.01 11.036 17.969 18.29 6.639 9.716 6.212 20.38 5.645 31.164-.265 5.038-1.318 10.03-1.765 15.064a5216.866 5216.866 0 00-4.014 47.555c-1.081 13.593-2.37 27.184-2.924 40.802-.704 17.24-1.385 34.527-.843 51.755.302 9.594 2.6 19.237 4.951 28.62 1.826 7.289 12.376 11.54 19.665 8.431 10.003-4.266 17.254-11.917 23.466-20.582.745-1.04.637-2.808.644-4.24.051-9.666-.09-19.334.053-28.998.236-15.924.38-31.856 1.047-47.765.668-15.948 1.354-31.934 3.062-47.793 2.665-24.733 3.25-49.501 2.761-74.313-.133-6.792-1.525-13.559-2.396-20.812 15.705-3.36 30.64-.884 44.314 8.286 13.7 9.187 18.042 23.142 19.19 38.633.605 8.17 1.761 16.34 1.741 24.507-.022 9.161-1.09 18.32-1.703 27.481-.011.166-.016.333-.023.5l-1.642 38.984.605.281c.998-3.307 2.12-6.582 2.975-9.926 8.262-32.326 18.35-64.032 31.445-94.765 4.445-10.434 9.853-20.049 18.046-28.064 10.943-10.706 23.712-14.261 38.824-12.145 15.694 2.198 28.293 9.457 39.458 20.28 11.342 10.994 16.698 24.878 20.217 39.687 3.746 15.767 4.416 31.844 4.087 47.998-.188 9.229-.034 18.464 1.133 27.958 1.38-4.487 2.628-9.02 4.161-13.453 4.835-13.982 9.47-28.043 14.758-41.853 5.98-15.621 12.028-31.263 19.088-46.41 6.006-12.884 15.126-23.575 27.9-30.616 10.999-6.063 22.797-5.422 34.426-3.287 14.182 2.605 26.719 9.151 36.664 19.675 9.594 10.152 15.809 22.31 18.858 36.048 3.428 15.445 3.256 31.113 2.895 46.758-.235 10.188-1.277 20.357-1.91 30.538-1.024 16.433-2.123 32.863-2.967 49.305-.55 10.745-1.196 21.524-.878 32.261.234 7.93 1.174 16.02 3.179 23.679 4.013 15.33 16.674 17.546 29.24 8.457 11.38-8.232 18.43-20.09 25.292-31.875 4.986-8.563 8.858-17.774 13.298-26.84 8.681 3.28 13.197 10.08 14.454 19.714.375 3.5.375 6.862-.005 10.825-1.952 6.17-2.846 12.048-5.222 17.25-7.884 17.266-19.98 31.328-35.327 42.336-11.791 8.458-24.443 14.526-39.902 12.906-11.082-1.16-21.274-4.19-30.41-10.277-14.454-9.63-26.082-22.05-31.578-38.757-7.508-22.818-9.456-46.463-8.22-70.43 1.174-22.758 2.292-45.526 2.93-68.304.304-10.903.079-21.908-1.124-32.732-.748-6.728-3.153-13.484-5.953-19.715-2.988-6.653-8.653-7.332-13.307-1.757-4.643 5.563-8.988 11.556-12.405 17.929-11.756 21.925-20.338 45.232-28.021 68.813-7.377 22.64-14.563 45.385-20.586 68.41-6.186 23.646-13.12 47.264-13.62 72.052-.024 1.215-1.647 3.144-2.866 3.47-9.95 2.664-20.13 3.278-30.181 1.034-14.639-3.27-26.997-10.281-30.968-25.842-1.995-7.82-1.842-16.325-1.733-24.507.143-10.685 1.16-21.36 1.883-32.034.955-14.104 2.866-28.206 2.808-42.302-.12-29.34 2.086-58.765-1.908-88.005-.908-6.656-2.063-13.424-6.914-18.822-3.17-3.528-6.579-3.27-9.339-.331-3.536 3.766-6.905 7.908-9.372 12.42-10.465 19.143-18.292 39.454-25.242 60.08-10.598 31.458-19.855 63.288-27.282 95.684-4.87 21.24-9.191 42.492-11.072 64.829-21.191 3.627-38.943-3.826-55.419-17.53-1.202 1.429-2.27 2.942-3.585 4.197-1.406 1.342-3.066 2.415-4.58 3.65-15.458 12.614-32.656 19.733-53.02 16.59-20.14-3.109-37.59-11.659-50.66-27.434-4.036-4.87-6.597-11.477-8.224-17.709-2.734-10.472-4.831-21.211-5.97-31.968-.978-9.243-.245-18.668-.264-28.013-.008-3.797-.001-7.593-.001-11.39-1.302.595-1.678 1.258-1.952 1.961-6.665 17.073-12.961 34.3-20.08 51.182-6.626 15.717-15.57 30.262-26.554 43.298-8.659 10.276-19.268 18.145-33.437 19.051-22.386 1.43-38.585-9.616-51.973-26.178-9.347-11.562-16.045-24.574-21.21-38.441-5.95-15.977-10.022-32.401-11.753-49.378-.776-7.617-1.47-15.243-2.162-22.464-36.324 2.21-66.277-9.146-88.516-38.677-2.66 4.806-5.341 8.885-7.276 13.291-5.626 12.816-11.363 25.609-16.299 38.696-6.838 18.13-11.751 36.802-11.7 56.386.024 9.424.622 18.845.943 28.268.345 10.09-.235 20.323 1.34 30.214.965 6.067-2.163 6.762-5.693 7.187-19.197 2.308-34.703-4.943-46.478-19.79-4.108-5.178-6.568-11.665-9.834-17.654-1.083.742-2.66 1.588-3.959 2.747-14.746 13.155-31.642 23.105-48.867 32.498-3.127 1.704-4.869 3.105-4.618 6.895.19 2.874-.424 5.859-1.032 8.72-3.484 16.399-7.228 32.692-13.792 48.256-10.82 25.657-28.242 44.24-54.96 53.502-20.554 7.125-41.523 9.72-63.182 7.009-13.583-1.7-26.804-4.236-38.462-11.996-9.562-6.366-15.732-15.064-15.267-26.7.416-10.409 4.796-19.635 12.202-27.31 11.708-12.132 26.077-20.402 40.816-28 21.25-10.953 42.783-21.354 64.096-32.187 2.42-1.23 5.75-1.863 5.78-6.155.144-21.424.524-42.846.943-64.267.151-7.759.507-15.52 1.025-23.264.282-4.215 1.211-8.383 1.65-12.593.804-7.711 1.461-15.438 2.18-23.158-1.126.013-1.5.57-1.732 1.18-8.382 22.102-16.351 44.37-25.238 66.267-8.16 20.108-18.465 39.003-34.48 54.316-11.008 10.525-24.21 13.47-38.479 11.596-13.426-1.765-24.552-9.126-33.937-18.51-6.288-6.289-11.394-13.76-17.1-20.787-6.004 10.12-13.752 18.892-23.132 26.242-12.742 9.984-27.087 15.905-43.325 16.172-11.527.19-22.241-3.519-32.608-8.453-17.45-8.307-31.804-19.536-35.397-39.764-2.787-15.694-4.51-31.588-6.342-47.435-.443-3.833.682-7.826.847-11.756.167-3.952.037-7.917.037-11.876-8.727 24.997-17.908 49.545-31.05 72.385-7.383 12.833-15.49 24.989-27.033 34.875-15.557 13.327-37.268 12.504-52.897 3.988-14.865-8.1-25.35-20.81-33.052-34.773-7.197 6.509-14.223 13.708-22.106 19.798-12.342 9.536-26.453 16.136-40.98 21.617-15.629 5.897-31.757 10.463-48.482 11.355-23.693 1.265-47.176-.784-70.258-6.815-19.547-5.107-37.948-12.59-54.26-24.697-7.17-5.32-7.165-5.472-14.152-.552-12.227 8.61-25.47 15.276-39.446 20.438-18.188 6.717-36.754 11.586-56.38 11.846-16.837.223-33.529-.81-50.016-4.139-15.027-3.034-29.69-7.222-43.668-13.817-11.83-5.582-22.636-12.53-31.707-20.826-6.369 5.753-12.13 11.601-18.542 16.621-15.57 12.192-33.559 14.342-52.394 10.991-14.733-2.62-27.577-9.568-38.09-20.1-10.424-10.44-16.448-23.536-19.414-37.9-1.802-8.73-3.329-17.567-4.181-26.432-1.056-10.98-1.57-22.035-1.764-33.068-.118-6.68.812-13.38 1.298-20.459-38.318 3.847-69.689-7.336-93.097-38.068-2.593 4.626-5.323 8.683-7.253 13.09-5.614 12.82-11.26 25.647-16.242 38.72-6.905 18.116-11.815 36.787-11.774 56.359.03 14.09.472 28.183.998 42.265.262 7.003 1.127 13.983 1.723 21.018-17.253 8.186-42.383-.62-56.163-21.991-2.772 2.286-5.644 4.486-8.327 6.896-17.221 15.473-36.962 22.605-60.372 19.897-17.892-2.069-33.234-9.34-46.767-20.598-18.992-15.8-29.76-36.679-35.095-60.45-4.955-22.074-9.592-44.222-14.097-66.392-3.125-15.382-5.788-30.857-8.698-46.505-.148-.026-.622-.188-1.092-.179-16.923.318-33.846.599-50.767 1.005-8.758.21-17.511.655-26.267.975-3.372.123-6.062.66-6.71 4.95-.744 4.928-2.213 9.75-3.422 14.604-6.193 24.877-11.824 49.914-18.78 74.576-6.328 22.431-13.657 44.61-21.38 66.607-6.135 17.47-12.964 34.755-23.788 50.092-4.964 7.032-10.295 13.849-18.937 16.06-15.673 4.01-28.09-2.987-38.32-13.827-9.516-10.084-15.683-22.45-20.888-35.306-6.466-15.97-10.558-32.494-12.985-49.509C3.43 463.76 2 460.411 1 457c0-.444 0-.889.372-1.801.124-2.378-.124-4.289-.372-6.199 0-13.354 0-26.708.363-40.652.12-2.176-.121-3.762-.363-5.348v-1.667m1258 23.152c.67 8.002.635 16.146 2.212 23.966a99.831 99.831 0 007.371 22.357c3.678 7.866 7.48 8.157 14.062 3.71 4.637-3.132 8.704-7.513 12.074-12.044 11.447-15.39 19.735-32.658 27.04-50.227a556.165 556.165 0 0026.613-81.107c1.506-6.14 3.797-12.432 3.578-18.578-.441-12.368-6.078-23.353-14.35-32.17-14.409-15.359-26.526-14.873-40.72-1.38-8.307 7.898-13.3 18.57-17.666 29.312-10.632 26.154-16.053 53.542-19.07 81.42-1.207 11.16-.81 22.492-1.144 34.741m788.484 45.524c2.03-2.36 4.244-4.585 6.06-7.098 11.332-15.67 19.83-32.972 27.23-50.674 11.048-26.428 19.736-53.731 26.834-81.501 1.525-5.968 3.597-12.14 3.368-18.139-.472-12.372-6.095-23.335-14.335-32.168-15.139-16.23-27.806-14.27-41.035-1.104-10.27 10.221-15.88 23.793-20.627 37.473-6.104 17.587-10.937 35.492-12.97 54.038-1.516 13.816-3.167 27.647-3.848 41.516-.493 10.04-.183 20.237 1.034 30.21 1.223 10.023 3.209 20.062 8.694 28.99 3.58 5.825 6.481 6.976 12.323 3.693 2.382-1.339 4.511-3.128 7.272-5.236m-482.532-165.613c-.638 1.136-1.515 2.2-1.878 3.418-4.13 13.87-8.246 27.744-12.238 41.655-5.346 18.629-6.511 37.882-7.697 57.048-.956 15.455-.266 30.993 2.95 46.22 1.73 8.196 3.824 16.44 10.557 22.405 3.436 3.044 7.083 4.216 10.785.81 3.062-2.815 6.31-5.689 8.495-9.154 16.238-25.752 28.942-53.264 38.995-81.932 6.49-18.507 12.008-37.36 17.662-56.149 1.668-5.544 3.664-11.514 3.172-17.082-1.337-15.139-9.135-27.378-20.72-36.868-5.485-4.493-12.03-8.076-19.707-6.435-7.567 1.617-13.164 6.512-17.23 12.74-4.741 7.26-8.734 15.009-13.146 23.324m-726.66 191.755c10.323-5.85 13.625-15.952 13.409-26.48-.253-12.304-1.622-24.846-4.577-36.772a378.948 378.948 0 00-15.424-48.151c-6.276-15.865-14.358-31.015-21.691-46.458-.435-.915-1.243-1.653-2.18-2.864-4.343 14.099-7.81 27.815-12.782 40.96-9.154 24.2-18.901 48.187-28.98 72.018-5.552 13.125-5.424 16.652 5.455 25.54 11.09 9.06 23.376 16.178 36.958 20.791 9.516 3.232 19.278 4.874 29.812 1.416m169.235-80.172c-5.648 12.977-11.569 25.845-16.801 38.988-1.88 4.722-1.999 10.202 2.747 13.97 6.993 5.551 13.726 11.624 21.363 16.128 12.582 7.42 25.88 12.891 41.105 13.187 8.683.169 17.608-7.717 20.095-14.445 4.123-11.157 4.008-22.721 1.69-33.87-3.432-16.511-7.145-33.181-13.074-48.903-8.05-21.349-18.297-41.87-27.643-62.727-.413-.922-1.23-1.663-1.444-1.944-9.206 26.331-18.406 52.644-28.038 79.616M229.495 201.995l-7.808-68.484c-3.639 1.536-7.622 5.984-9.493 12.101-7.531 24.617-15.452 49.142-22.017 74.02-7.164 27.145-12.987 54.643-19.293 81.555h71.097c0-1.812.123-2.828-.018-3.805-1.631-11.266-3.433-22.508-4.92-33.791-1.218-9.23-2.026-18.513-3.103-27.762-1.281-11.017-2.655-22.023-4.445-33.834M61.547 367.97c-1.858 2.084-4.003 3.979-5.528 6.283-11.306 17.074-14.124 36.656-15.884 56.38-.797 8.939-.372 18.015-.072 27.015.336 10.097 2.316 19.775 6.745 29.11 4.232 8.919 13.373 9.07 18.152.759 3.51-6.102 6.895-12.504 8.908-19.2 10.612-35.3 20.796-70.728 31.056-106.133 1.32-4.556 2.226-9.233 3.487-14.542-17.258 4.175-32.76 9.755-46.864 20.328M1627 579.467l5.256-16.574c-1.501.168-2.226.07-2.775.336-11.301 5.499-22.822 10.608-33.79 16.711-8.42 4.685-16.42 10.268-24.061 16.16-4.362 3.363-3.417 7.74 1.214 10.88 6.155 4.175 13.21 4.803 20.139 3.89 11.958-1.578 22.421-6.124 28.02-17.93 2-4.215 3.97-8.443 5.997-13.473z"
      />
    </svg>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;