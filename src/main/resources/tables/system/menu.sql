CREATE TABLE t_menu (
  id         CHAR(32) PRIMARY KEY,
  name       VARCHAR(32) NOT NULL,
  content     TEXT,
  type       TINYINT            NOT NULL, # 0:父菜单, 1:叶子菜单
  sort_order TINYINT            NOT NULL,
  path       VARCHAR(32)        NULL,
  parent_id  CHAR(32),
  CONSTRAINT fk_menu_parent_id
  FOREIGN KEY (parent_id) REFERENCES ssm.t_menu (id)
);

CREATE INDEX index_menu_parent_id
  ON t_menu (parent_id);