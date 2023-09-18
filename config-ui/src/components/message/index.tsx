/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > .bp5-icon {
    margin-right: 16px;
  }
`;

interface Props {
  style?: React.CSSProperties;
  size?: number;
  content: React.ReactNode;
}

export const Message = ({ style, size = 20, content }: Props) => {
  return (
    <Wrapper style={style}>
      <Icon icon="warning-sign" size={size} color="#f4be55" />
      <span>{content}</span>
    </Wrapper>
  );
};
