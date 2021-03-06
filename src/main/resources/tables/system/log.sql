DROP TABLE IF EXISTS t_log;

/*==============================================================*/
/* Table: t_log                                                 */
/*==============================================================*/
CREATE TABLE t_log
(
  id          INT NOT NULL,
  ip          VARCHAR(32),
  create_date DATETIME,
  status      TINYINT, # 0: 通过 1: 未登录 2: 无权限
  action_url  VARCHAR(64),
  user_id     CHAR(32),
  content      TEXT,
  PRIMARY KEY (id)
);

ALTER TABLE t_log
  ADD CONSTRAINT FK_fk_log_action_url FOREIGN KEY (action_url)
REFERENCES t_action (url)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;

ALTER TABLE t_log
  ADD CONSTRAINT FK_fk_log_user_id FOREIGN KEY (user_id)
REFERENCES t_user (id)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;
