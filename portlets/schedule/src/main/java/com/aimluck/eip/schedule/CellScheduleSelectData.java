/*
 * Aipo is a groupware program developed by Aimluck,Inc.
 * Copyright (C) 2004-2008 Aimluck,Inc.
 * http://aipostyle.com/
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package com.aimluck.eip.schedule;

import org.apache.jetspeed.services.logging.JetspeedLogFactoryService;
import org.apache.jetspeed.services.logging.JetspeedLogger;
import org.apache.turbine.util.RunData;
import org.apache.velocity.context.Context;

import com.aimluck.eip.cayenne.om.portlet.EipTSchedule;
import com.aimluck.eip.common.ALDBErrorException;
import com.aimluck.eip.common.ALEipConstants;
import com.aimluck.eip.common.ALPageNotFoundException;
import com.aimluck.eip.modules.actions.common.ALAction;
import com.aimluck.eip.schedule.util.ScheduleUtils;
import com.aimluck.eip.util.ALEipUtils;

/**
 * スケジュール詳細表示の検索結果を管理するクラスです。
 * 
 */
public class CellScheduleSelectData extends ScheduleSelectData {

  /** <code>logger</code> logger */
  @SuppressWarnings("unused")
  private static final JetspeedLogger logger = JetspeedLogFactoryService
    .getLogger(CellScheduleSelectData.class.getName());

  /** <code>viewtype</code> 表示タイプ */
  protected String viewtype;

  protected String entityid;

  // private ALDateTimeField view_date;

  /*
   * @see
   * com.aimluck.eip.common.ALAbstractSelectData#selectDetail(org.apache.turbine
   * .util.RunData, org.apache.velocity.context.Context)
   */
  @Override
  protected EipTSchedule selectDetail(RunData rundata, Context context)
      throws ALPageNotFoundException, ALDBErrorException {

    viewtype = ScheduleUtils.getCurrentTab(rundata, context);

    entityid = ALEipUtils.getTemp(rundata, context, ALEipConstants.ENTITY_ID);

    return super.selectDetail(rundata, context);
  }

  @Override
  public void init(ALAction action, RunData rundata, Context context)
      throws ALPageNotFoundException, ALDBErrorException {
    // スーパークラスのメソッドを呼び出す。
    super.init(action, rundata, context);
    if (ALEipUtils.isMatch(rundata, context)) {
      if (rundata.getParameters().containsKey("view_date")) {
        ALEipUtils.setTemp(rundata, context, "view_date", rundata
          .getParameters()
          .getString("view_date"));
      }
    }
  }

  /**
   * 表示タイプを取得します。
   * 
   * @return
   */
  public String getViewtype() {
    return viewtype;
  }

  public String getEntityId() {
    return entityid;
  }
}
