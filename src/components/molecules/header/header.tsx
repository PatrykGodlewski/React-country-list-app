import React from "react";
import Text from "components/atoms/text/text.styled";

interface Props {
  variant: string;
}

const header: React.FC<Props> = () => <Text variant="xd"> xd </Text>;

export default header;
